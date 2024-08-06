import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_DEFAULT_INPUT_COLORS, TuiInputColorModule} from '@taiga-ui/legacy';

import {ThemeSwitcherService} from './theme-switcher.service';

@Component({
    standalone: true,
    selector: 'lmb-theme-switcher',
    imports: [CommonModule, FormsModule, TuiInputColorModule, TuiTextfield],
    templateUrl: './theme-switcher.component.html',
    styleUrl: './theme-switcher.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
    protected themeSwitcherService = inject(ThemeSwitcherService).themeSwitcherData;
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected color = '#ffdd2d';
}
