import {CommonModule} from '@angular/common';
import type {Signal} from '@angular/core';
import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiHint,
    TuiIcon,
    TuiLink,
    TuiOptGroup,
    TuiSurface,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiCheckbox, TuiSwitch} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputNumberModule,
    TuiInputYearModule,
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
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiCheckbox,
        TuiCurrencyPipe,
        TuiDataList,
        TuiDropdown,
        TuiHeader,
        TuiHint,
        TuiIcon,
        TuiInputNumberModule,
        TuiInputYearModule,
        TuiLink,
        TuiOptGroup,
        TuiRepeatTimes,
        TuiSurface,
        TuiSwitch,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './theme-example.component.html',
    styleUrl: './theme-example.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style]': 'this.host()',
    },
})
export class ThemeExampleComponent {
    protected readonly exampleControl = new FormControl(100);
    protected readonly exampleYearControl = new FormControl<number | null>(null);
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

    @Input()
    public host: Signal<string> = signal('');
}
