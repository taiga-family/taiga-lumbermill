import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import {TuiFilterPipe, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

import {ElectricityService} from './electricity.service';

@Component({
    standalone: true,
    selector: 'lmb-electricity',
    imports: [
        CommonModule,
        TuiInputDateRangeModule,
        AsyncPipe,
        NgForOf,
        NgIf,
        FormsModule,
        TuiAxes,
        TuiLineDaysChartHint,
        TuiLineDaysChart,
        TuiLineChart,
        TuiFilterPipe,
        TuiMapperPipe,
        TuiCardLarge,
        TuiAppearance,
    ],
    templateUrl: './electricity.component.html',
    styleUrl: './electricity.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityComponent {
    protected electricityService = inject(ElectricityService);
}
