import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import type {Observable} from 'rxjs';

import {WEATHER_KEY} from './weather.constants';
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
    private readonly KEY = inject(WEATHER_KEY);

    public readonly weatherData = INITIAL_DATA;

    public getWeather(): Observable<ResponseData> {
        return this.http.get<ResponseData>(
            'https://api.weatherapi.com/v1/forecast.json',
            {
                params: {
                    key: this.KEY,
                    q: 'London',
                    api: 'yes',
                    days: '4',
                },
            },
        );
    }
}
