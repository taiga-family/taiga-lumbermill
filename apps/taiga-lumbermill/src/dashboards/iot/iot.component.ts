import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {CleaningComponent} from './components/Cleaning/cleaning.component';
import {ClimateControlComponent} from './components/climate-control/climate-control.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import {CostComponent} from './components/Cost/cost.component';
import {ElectroComponent} from './components/Electro/electro.component';
import {LightingComponent} from './components/Lighting/lighting.component';
import {SafetyComponent} from './components/Safety/safety.component';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [
        CommonModule,
        ElectroComponent,
        CostComponent,
        SafetyComponent,
        ClimateControlComponent,
        LightingComponent,
        CleaningComponent,
        ControlPanelComponent,
    ],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
