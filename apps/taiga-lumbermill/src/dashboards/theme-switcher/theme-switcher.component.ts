import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {
    TuiAppearance,
    TuiButton,
    TuiHint,
    TuiLink,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {
    TUI_DEFAULT_INPUT_COLORS,
    TuiInputColorModule,
    TuiInputNumberModule,
    TuiInputYearModule,
    TuiIslandDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

import {ThemeSwitcherService} from './theme-switcher.service';

@Component({
    standalone: true,
    selector: 'lmb-theme-switcher',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiCurrencyPipe,
        TuiHeader,
        TuiHint,
        TuiInputColorModule,
        TuiInputNumberModule,
        TuiInputYearModule,
        TuiIslandDirective,
        TuiLink,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './theme-switcher.component.html',
    styleUrl: './theme-switcher.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--tui-background-base]': 'this.colors[0]',
        '[style.--tui-text-primary]': 'this.colors[1]',
        '[style.--tui-text-secondary]': 'this.colors[2]',
        '[style.--tui-text-action]': 'this.colors[3]',
        '[style.--tui-background-accent-2]': 'this.colors[4]',
    },
})
export class ThemeSwitcherComponent {
    protected themeSwitcherService = inject(ThemeSwitcherService).themeSwitcherData;
    protected readonly exampleControl = new FormControl(100);
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected colors = this.themeSwitcherService.map((val) => val.base_color);
}
