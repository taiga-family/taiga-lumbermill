import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiTiles} from '@taiga-ui/kit';

import {LineChartComponent} from './components/LineChart/line-chart.component';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [CommonModule, LineChartComponent, TuiTiles],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
