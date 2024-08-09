import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

import {ThemeExampleComponent} from './theme-example/theme-example.component';
import {data} from './theme-generator.constants';

@Component({
    standalone: true,
    selector: 'lmb-theme-switcher',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ThemeExampleComponent,
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
    templateUrl: './theme-generator.component.html',
    styleUrl: './theme-generator.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeGeneratorComponent {
    protected themeData = data;
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected colors = this.themeData.map((val) => signal(val.base_color));

    protected host = computed(() =>
        this.colors.map((val, i) => `${this.themeData[i].property}: ${val()};`).join(' '),
    );
}
