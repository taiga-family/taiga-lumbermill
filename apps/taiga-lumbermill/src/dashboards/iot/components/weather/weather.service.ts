import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import type {Observable} from 'rxjs';

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
    protected http = inject(HttpClient);
    protected readonly API_KEY = '1df6860ee44f43d693d113704242207';
    protected readonly city = 'London';
    public readonly weatherData = INITIAL_DATA;

    public getTest(): Observable<ResponseData> {
        return this.http.get<ResponseData>('http://api.weatherapi.com/v1/current.json', {
            params: {
                key: this.API_KEY,
                q: this.city,
                api: 'yes',
            },
        });
    }
}
