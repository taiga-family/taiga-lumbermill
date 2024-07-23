import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import type {Observable} from 'rxjs';

import {CLOUD_CODES, RAINS_CODES, SNOW_CODES, WEEKDAYS} from './weather.constants';
import type {ResponseData, WeatherData} from './weather.interface';

export const INITIAL_DATA: WeatherData[] = [
    {day: 'Fri', temp: '21°/25°', icon: '@tui.snowflake'},
    {day: 'Mon', temp: '30°/33°', icon: '@tui.sun'},
    {day: 'Tue', temp: '17°/23°', icon: '@tui.droplet'},
];

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private readonly http = inject(HttpClient);
    protected readonly API_KEY = '1df6860ee44f43d693d113704242207';

    public readonly weatherData = INITIAL_DATA;

    public getWeather(): Observable<ResponseData> {
        return this.http.get<ResponseData>(
            'https://api.weatherapi.com/v1/forecast.json',
            {
                params: {
                    key: this.API_KEY,
                    q: 'London',
                    api: 'yes',
                    days: '4',
                },
            },
        );
    }

    public getWeekDay(value: string | undefined): string {
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

    public getTypeOfWeather(value: number | undefined): string {
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

    public getImage(value: number | undefined): string {
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
