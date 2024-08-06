import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
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
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputNumberModule,
    TuiInputYearModule,
    TuiIslandDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'lmb-theme-example',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAppearance,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiCurrencyPipe,
        TuiHeader,
        TuiHint,
        TuiInputNumberModule,
        TuiInputYearModule,
        TuiIslandDirective,
        TuiLink,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './theme-example.component.html',
    styleUrl: './theme-example.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeExampleComponent {
    protected readonly exampleControl = new FormControl(100);
    protected readonly badges = [
        'primary',
        'accent',
        'success',
        'error',
        'warning',
        'neutral',
        'info',
    ];

    protected readonly buttons = ['primary', 'accent', 'destructive', 'flat', 'outline'];
}
