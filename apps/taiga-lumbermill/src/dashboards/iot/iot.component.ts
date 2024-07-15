import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiTiles} from '@taiga-ui/kit';

import {BarChartCmponent} from './components/BarChart/bar-chart.component';
import {LineChartComponent} from './components/LineChart/line-chart.component';
import {SmallCardCmponent} from './components/SmallCard/small-card.component';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [
        CommonModule,
        LineChartComponent,
        SmallCardCmponent,
        BarChartCmponent,
        TuiTiles,
    ],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
