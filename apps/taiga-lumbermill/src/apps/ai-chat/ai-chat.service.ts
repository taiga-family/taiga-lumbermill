import {computed, DestroyRef, inject, Injectable, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    finalize,
    interval,
    map,
    type Subscription,
    switchMap,
    takeWhile,
    timer,
} from 'rxjs';

import {
    type Chat,
    type ChatMessage,
    type ChatPart,
    CHATS,
    mockAnswer,
    MODELS,
} from './ai-chat.data';

interface Streaming {
    readonly chatId: number;
    readonly messageId: number;
    readonly length: number;
}

// Characters revealed per tick of the fake streaming
const STEP = 3;

export function contentOf(part: ChatPart): string {
    return part.type === 'code' ? part.code : part.text;
}

function truncate(parts: readonly ChatPart[], length: number): readonly ChatPart[] {
    let left = length;

    return parts.flatMap((part) => {
        const content = contentOf(part).slice(0, Math.max(left, 0));

        left -= contentOf(part).length;

        if (!content) {
            return [];
        }

        return part.type === 'code' ? {...part, code: content} : {...part, text: content};
    });
}

/**
 * State of the chat app. Answers are mocked and "streamed" with a timer —
 * replace {@link mockAnswer} with a real model API to make it live.
 */
@Injectable()
export class AiChatService {
    private readonly destroyRef = inject(DestroyRef);
    private nextId = 1000;
    private response?: Subscription;

    public readonly chats = signal<readonly Chat[]>(CHATS);
    public readonly activeId = signal<number | null>(null);
    public readonly model = signal(MODELS[0]);
    public readonly thinking = signal(false);
    public readonly streaming = signal<Streaming | null>(null);
    public readonly busy = computed(() => this.thinking() || !!this.streaming());

    public readonly active = computed(
        () => this.chats().find(({id}) => id === this.activeId()) ?? null,
    );

    // Messages of the active chat with the one being streamed cut to the revealed length
    public readonly thread = computed<readonly ChatMessage[]>(() => {
        const streaming = this.streaming();
        const messages = this.active()?.messages ?? [];

        return streaming?.chatId === this.activeId()
            ? messages.map((message) =>
                  message.id === streaming.messageId
                      ? {...message, parts: truncate(message.parts, streaming.length)}
                      : message,
              )
            : messages;
    });

    public open(id: number | null): void {
        this.stop();
        this.activeId.set(id);
    }

    public remove(id: number): void {
        if (this.activeId() === id) {
            this.open(null);
        }

        this.chats.update((chats) => chats.filter((chat) => chat.id !== id));
    }

    public send(text: string): void {
        const value = text.trim();

        if (!value || this.busy()) {
            return;
        }

        const chatId = this.activeId() ?? this.create(value);
        const answer = mockAnswer(value);
        const total = answer.reduce((sum, part) => sum + contentOf(part).length, 0);

        this.append(chatId, 'user', [{type: 'text', text: value}]);
        this.thinking.set(true);

        this.response = timer(800)
            .pipe(
                switchMap(() => {
                    const messageId = this.append(chatId, 'assistant', answer);

                    this.thinking.set(false);
                    this.streaming.set({chatId, messageId, length: 0});

                    return interval(16).pipe(
                        map((index) => (index + 1) * STEP),
                        takeWhile((length) => length < total, true),
                    );
                }),
                finalize(() => {
                    this.thinking.set(false);
                    this.streaming.set(null);
                }),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((length) =>
                this.streaming.update((streaming) => streaming && {...streaming, length}),
            );
    }

    public stop(): void {
        const streaming = this.streaming();

        // Keep only the part of the answer that was already shown
        if (streaming) {
            this.patch(streaming.chatId, (messages) =>
                messages.map((message) =>
                    message.id === streaming.messageId
                        ? {...message, parts: truncate(message.parts, streaming.length)}
                        : message,
                ),
            );
        }

        this.response?.unsubscribe();
    }

    public regenerate(): void {
        const chatId = this.activeId();
        const messages = this.active()?.messages ?? [];
        const question = [...messages].reverse().find(({role}) => role === 'user');

        if (chatId === null || !question || this.busy()) {
            return;
        }

        this.patch(chatId, (items) => items.slice(0, items.indexOf(question)));
        this.send(question.parts.map(contentOf).join(''));
    }

    private create(title: string): number {
        const id = this.nextId++;

        this.chats.update((chats) => [
            {id, title, group: 'Today', messages: []},
            ...chats,
        ]);
        this.activeId.set(id);

        return id;
    }

    private append(
        chatId: number,
        role: ChatMessage['role'],
        parts: readonly ChatPart[],
    ): number {
        const id = this.nextId++;

        this.patch(chatId, (messages) => [...messages, {id, role, parts}]);

        return id;
    }

    private patch(
        chatId: number,
        fn: (messages: readonly ChatMessage[]) => readonly ChatMessage[],
    ): void {
        this.chats.update((chats) =>
            chats.map((chat) =>
                chat.id === chatId ? {...chat, messages: fn(chat.messages)} : chat,
            ),
        );
    }
}
