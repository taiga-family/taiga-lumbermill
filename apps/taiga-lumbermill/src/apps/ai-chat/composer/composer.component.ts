import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    TuiDropdown,
    TuiLink,
    TuiTextfield,
} from '@taiga-ui/core';
import {
    TuiButtonSelect,
    TuiChevron,
    TuiDataListWrapper,
    TuiTextarea,
} from '@taiga-ui/kit';

import {MODELS} from '../ai-chat.data';
import {AiChatService} from '../ai-chat.service';

@Component({
    standalone: true,
    selector: 'lmb-ai-chat-composer',
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
        TuiLink,
        TuiTextarea,
        TuiTextfield,
    ],
    templateUrl: './composer.component.html',
    styleUrl: './composer.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({appearance: 'flat-grayscale', size: 's'})],
})
export class ComposerComponent {
    protected readonly chat = inject(AiChatService);
    protected readonly models = MODELS;
    protected readonly prompt = signal('');

    protected send(): void {
        if (this.prompt().trim() && !this.chat.busy()) {
            this.chat.send(this.prompt());
            this.prompt.set('');
        }
    }
}
