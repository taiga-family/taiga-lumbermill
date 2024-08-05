import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiIcon} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';

import {CLOUD_CODES, RAINS_CODES, SNOW_CODES, WEEKDAYS} from './weather.constants';
import type {ResponseData} from './weather.interface';
import {WeatherService} from './weather.service';

@Component({
    standalone: true,
    selector: 'lmb-weather',
    imports: [AsyncPipe, CommonModule, TuiAppearance, TuiCardLarge, TuiIcon],
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
    protected weatherService = inject(WeatherService);
    protected info$: Observable<ResponseData> = this.weatherService.getWeather();

    protected getWeekDay(value: string): string {
        const valueSplit = value.split('-');
        const date = new Date(
            parseInt(valueSplit[0], 10),
            parseInt(valueSplit[1], 10) - 1,
            parseInt(valueSplit[2], 10),
        );

        return WEEKDAYS[date.getDay()];
    }

    protected getTypeOfWeather(value: number): string {
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

    protected getSmallImage(value: number): string {
        const type = this.getTypeOfWeather(value);

        if (type === 'snow') {
            return '@tui.snowflake';
        }

        if (type === 'rain') {
            return '@tui.droplet';
        }

        if (type === 'clouds') {
            return '@tui.cloud';
        }

        return '@tui.sun';
    }

    protected getImage(value: number): string {
        const type = this.getTypeOfWeather(value);

        return `url(./weather/${type}.jpg)`;
    }
}
