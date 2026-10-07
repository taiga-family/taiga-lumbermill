import {TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {
    TuiAppearance,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiDataList,
    TuiDropdown,
    TuiHint,
    TuiIcon,
    TuiInput,
    TuiLink,
    TuiOptGroup,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiInputNumber,
    TuiInputYear,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiSurface} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-theme-example',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TitleCasePipe,
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
        TuiInput,
        TuiInputNumber,
        TuiInputYear,
        TuiLink,
        TuiOptGroup,
        TuiSurface,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './theme-example.component.html',
    styleUrl: './theme-example.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[style]': 'this.theme()'},
})
export class ThemeExampleComponent {
    protected readonly exampleControl = new FormControl(100);
    protected readonly exampleYearControl = new FormControl<number | null>(null);
    protected readonly badges = [
        'primary',
        'accent',
        'positive',
        'negative',
        'warning',
        'neutral',
        'info',
    ];

    protected readonly buttons = [
        'primary',
        'accent',
        'secondary-destructive',
        'flat',
        'outline',
    ];

    public readonly theme = input('');
}
