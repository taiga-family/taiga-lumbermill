import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAppearance, tuiNumberFormatProvider, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiInputNumberModule, tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

import {ClimateControlService} from './climate-control.service';

@Component({
    standalone: true,
    selector: 'lmb-climate-control',
    imports: [
        CommonModule,
        FormsModule,
        TuiAppearance,
        TuiCardLarge,
        TuiInputNumberModule,
        TuiTitle,
    ],
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
    protected climateControlService = inject(ClimateControlService).climateControlData;
}
