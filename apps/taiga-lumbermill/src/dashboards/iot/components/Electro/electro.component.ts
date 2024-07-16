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
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

import {ElectroService} from '../../data/services/electro.service';

@Component({
    standalone: true,
    selector: 'app-line-chart',
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
    ],
    templateUrl: './electro.component.html',
    styleUrl: './electro.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent {
    protected dataElectro = inject(ElectroService);
}
