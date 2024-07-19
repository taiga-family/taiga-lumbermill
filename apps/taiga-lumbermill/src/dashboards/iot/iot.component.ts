import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

import {CleaningComponent} from './components/Cleaning/cleaning.component';
import {ClimateControlComponent} from './components/climate-control/climate-control.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import {CostComponent} from './components/Cost/cost.component';
import {ElectricityComponent} from './components/electricity/electricity.component';
import {LightingComponent} from './components/Lighting/lighting.component';
import {MusicComponent} from './components/music/music.component';
import {SafetyComponent} from './components/Safety/safety.component';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [
        CommonModule,
        ElectricityComponent,
        CostComponent,
        SafetyComponent,
        ClimateControlComponent,
        LightingComponent,
        CleaningComponent,
        ControlPanelComponent,
        MusicComponent,
        TuiAppearance,
        TuiCardLarge,
    ],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
