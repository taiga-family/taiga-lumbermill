import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiCardLarge} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';

import type {ResponseData} from './weather.interface';
import {WeatherService} from './weather.service';

@Component({
    standalone: true,
    selector: 'lmb-weather',
    imports: [
        CommonModule,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiTitle,
        TuiIcon,
        AsyncPipe,
    ],
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [WeatherService],
})
export class WeatherComponent {
    protected weatherService = inject(WeatherService);
    protected info: Observable<ResponseData> = this.weatherService.getWeather();
}
