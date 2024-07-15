import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiTiles} from '@taiga-ui/kit';

import {CleaningCmponent} from './components/Cleaning/cleaning.component';
import {BarChartCmponent} from './components/Cost/cost.component';
import {LineChartComponent} from './components/Electro/electro.component';
import {LightingCmponent} from './components/Lighting/lighting.component';
import {SafetyComponent} from './components/Safety/safety.component';
import {SmallCardCmponent} from './components/SmallCard/small-card.component';
import {ClimateControlCmponent} from './components/СlimateСontrol/climate-control.component';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [
        CommonModule,
        LineChartComponent,
        SmallCardCmponent,
        BarChartCmponent,
        SafetyComponent,
        ClimateControlCmponent,
        LightingCmponent,
        CleaningCmponent,
        TuiTiles,
    ],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
