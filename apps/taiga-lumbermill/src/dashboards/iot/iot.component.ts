import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiIcon} from '@taiga-ui/core';
import {TuiLogoComponent, TuiNavComponent} from '@taiga-ui/layout';

import {CleaningComponent} from './components/cleaning/cleaning.component';
import {ClimateControlComponent} from './components/climate-control/climate-control.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import {CostComponent} from './components/cost/cost.component';
import {ElectricityComponent} from './components/electricity/electricity.component';
import {LightingComponent} from './components/lighting/lighting.component';
import {MusicComponent} from './components/music/music.component';
import {SafetyComponent} from './components/safety/safety.component';
import {WeatherComponent} from './components/weather/weather.component';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [
        CleaningComponent,
        ClimateControlComponent,
        CommonModule,
        ContactsComponent,
        ControlPanelComponent,
        CostComponent,
        ElectricityComponent,
        LightingComponent,
        MusicComponent,
        RouterLink,
        SafetyComponent,
        TuiIcon,
        TuiLogoComponent,
        TuiNavComponent,
        WeatherComponent,
    ],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
