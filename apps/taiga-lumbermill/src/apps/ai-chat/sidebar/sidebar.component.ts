import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    output,
    signal,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiAppearance,
    TuiButton,
    TuiCell,
    TuiIcon,
    TuiInput,
    TuiScrollbar,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

import {type Chat, LINKS} from '../ai-chat.data';
import {AiChatService} from '../ai-chat.service';

@Component({
    standalone: true,
    selector: 'lmb-ai-chat-sidebar',
    imports: [
        FormsModule,
        TuiAppearance,
        TuiButton,
        TuiCell,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiInput,
        TuiScrollbar,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    protected readonly chat = inject(AiChatService);
    protected readonly links = LINKS;
    protected readonly search = signal('');

    protected readonly groups = computed(() => {
        const search = this.search().trim().toLowerCase();
        const groups = new Map<string, Chat[]>();

        for (const chat of this.chat.chats()) {
            if (chat.title.toLowerCase().includes(search)) {
                groups.set(chat.group, [...(groups.get(chat.group) ?? []), chat]);
            }
        }

        return Array.from(groups, ([name, chats]) => ({name, chats}));
    });

    public readonly navigate = output();

    protected open(id: number | null): void {
        this.chat.open(id);
        this.navigate.emit();
    }
}
