import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiTiles} from '@taiga-ui/kit';

import {CleaningComponent} from './components/Cleaning/cleaning.component';
import {BarChartComponent} from './components/Cost/cost.component';
import {LineChartComponent} from './components/Electro/electro.component';
import {LightingComponent} from './components/Lighting/lighting.component';
import {SafetyComponent} from './components/Safety/safety.component';
import {SmallCardComponent} from './components/SmallCard/small-card.component';
import {ClimateControlComponent} from './components/СlimateСontrol/climate-control.component';

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
