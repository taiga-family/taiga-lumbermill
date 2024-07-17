import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberModule, tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

import {ClimateControlService} from '../../data/services/climate-control.service';

@Component({
    standalone: true,
    selector: 'lmb-climate-control',
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
    protected data = inject(ClimateControlService);
}
