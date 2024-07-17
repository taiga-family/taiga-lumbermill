import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiTiles} from '@taiga-ui/kit';

import {CleaningComponent} from './components/cleaning/cleaning.component';
import {ClimateControlComponent} from './components/climate-control/climate-control.component';
import {BarChartComponent} from './components/cost/cost.component';
import {LineChartComponent} from './components/electro/electro.component';
import {LightingComponent} from './components/lighting/lighting.component';
import {SafetyComponent} from './components/safety/safety.component';
import {SmallCardComponent} from './components/small-card/small-card.component';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [
        CommonModule,
        LineChartComponent,
        SmallCardComponent,
        BarChartComponent,
        SafetyComponent,
        ClimateControlComponent,
        LightingComponent,
        CleaningComponent,
        TuiTiles,
    ],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
