import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';

import {CLOUD_CODES, RAINS_CODES, SNOW_CODES, WEEKDAYS} from './weather.constants';
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
    protected info$: Observable<ResponseData> = this.weatherService.getWeather();

    protected getWeekDay(value: string | undefined): string {
        if (value === undefined || value === null) {
            return '';
        }

        const valueSplit = value.split('-');
        const date = new Date(
            parseInt(valueSplit[0], 10),
            parseInt(valueSplit[1], 10) - 1,
            parseInt(valueSplit[2], 10),
        );

        return WEEKDAYS[date.getDay()];
    }

    protected getTypeOfWeather(value: number | undefined): string {
        if (value === undefined) {
            return '';
        }

        if (CLOUD_CODES.includes(value)) {
            return 'clouds';
        }

        if (RAINS_CODES.includes(value)) {
            return 'rain';
        }

        if (SNOW_CODES.includes(value)) {
            return 'snow';
        }

        return 'sun';
    }

    protected getImage(value: number | undefined): string {
        if (value === undefined) {
            return '';
        }

        const type = this.getTypeOfWeather(value);

        if (type === 'clouds') {
            return 'url(/weather/clouds.jpg)';
        }

        if (type === 'rain') {
            return 'url(/weather/rain.jpg)';
        }

        if (type === 'snow') {
            return 'url(/weather/snow.jpg)';
        }

        return 'url(/weather/sun.jpg)';
    }
}
