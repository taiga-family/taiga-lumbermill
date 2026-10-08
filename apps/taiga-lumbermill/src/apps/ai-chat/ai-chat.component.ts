import {
    afterRenderEffect,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiButton, TuiCell, TuiIcon, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiChip, TuiFade, TuiShimmer} from '@taiga-ui/kit';
import {TuiHeader, TuiItemGroup, TuiNavigation} from '@taiga-ui/layout';

import {SUGGESTIONS} from './ai-chat.data';
import {AiChatService} from './ai-chat.service';
import {ComposerComponent} from './composer/composer.component';
import {HeroComponent} from './hero/hero.component';
import {MessageComponent} from './message/message.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
    standalone: true,
    selector: 'lmb-ai-chat',
    imports: [
        ComposerComponent,
        HeroComponent,
        MessageComponent,
        RouterLink,
        SidebarComponent,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiChip,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiItemGroup,
        TuiNavigation,
        TuiScrollbar,
        TuiShimmer,
        TuiTitle,
    ],
    templateUrl: './ai-chat.component.html',
    styleUrl: './ai-chat.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AiChatService],
})
export class AiChatComponent {
    private readonly scrollbar = viewChild(TuiScrollbar, {read: ElementRef});

    protected readonly chat = inject(AiChatService);
    protected readonly suggestions = SUGGESTIONS;
    protected readonly sidebar = signal(false);

    constructor() {
        // Keep the latest message in view while the answer is streaming
        afterRenderEffect(() => {
            this.chat.thread();
            this.chat.thinking();

            const el: HTMLElement | undefined = this.scrollbar()?.nativeElement;

            el?.scrollTo({top: el.scrollHeight});
        });
    }

    protected open(id: number | null): void {
        this.chat.open(id);
        this.sidebar.set(false);
    }
}
