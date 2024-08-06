import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
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
        '[style]': 'this.host()',
    },
})
export class ThemeSwitcherComponent {
    protected themeSwitcherService = inject(ThemeSwitcherService).themeSwitcherData;
    protected readonly exampleControl = new FormControl(100);
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected colors = this.themeSwitcherService.map((val) => signal(val.base_color));

    protected host = computed(() =>
        this.colors
            .map((val, i) => `${this.themeSwitcherService[i].property}: ${val()};`)
            .join(' '),
    );
}
