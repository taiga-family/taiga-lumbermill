import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiCardLarge} from '@taiga-ui/layout';

import {WeatherService} from './weather.service';

@Component({
    standalone: true,
    selector: 'lmb-weather',
    imports: [CommonModule, TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle, TuiIcon],
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
    protected weatherService = inject(WeatherService).weatherData;
}
