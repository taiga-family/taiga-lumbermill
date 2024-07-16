import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberModule, tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'app-climate-control',
    imports: [CommonModule, TuiInputNumberModule, FormsModule],
    templateUrl: './climate-control.component.html',
    styleUrl: './climate-control.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiNumberFormatProvider({
            precision: 0,
        }),
        tuiInputNumberOptionsProvider({
            step: 1,
        }),
    ],
})
export class ClimateControlComponent {
    protected value = 32;
    protected value2 = 0;
    protected value3 = 10;
}
