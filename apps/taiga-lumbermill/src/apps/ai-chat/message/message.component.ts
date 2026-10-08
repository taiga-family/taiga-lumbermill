import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiCopy,
    TuiLike,
    tuiLikeOptionsProvider,
    TuiMessage,
} from '@taiga-ui/kit';

import {type ChatMessage} from '../ai-chat.data';
import {AiChatService, contentOf} from '../ai-chat.service';

@Component({
    standalone: true,
    selector: 'lmb-ai-chat-message',
    imports: [TuiAvatar, TuiButton, TuiCopy, TuiLike, TuiMessage],
    templateUrl: './message.component.html',
    styleUrl: './message.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({appearance: 'flat-grayscale', size: 's'}),
        tuiLikeOptionsProvider({appearance: 'flat-grayscale', size: 's'}),
    ],
    host: {'[attr.data-role]': 'message().role'},
})
export class MessageComponent {
    protected readonly chat = inject(AiChatService);
    protected readonly text = computed(() =>
        this.message().parts.map(contentOf).join('\n\n'),
    );

    public readonly message = input.required<ChatMessage>();
    public readonly last = input(false);
}
