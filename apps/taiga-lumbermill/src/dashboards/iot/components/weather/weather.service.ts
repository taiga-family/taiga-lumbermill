import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import type {Observable} from 'rxjs';

import type {ResponseData, WeatherData} from './weather.interface';
import {WeatherUtil} from './weather.util';

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
    protected readonly city = 'Moscow';
    protected weatherUtil = inject(WeatherUtil);
    public readonly weatherData = INITIAL_DATA;
    public getWeekDay = this.weatherUtil.getWeekDay;
    public getTypeOfWeather = this.weatherUtil.getTypeOfWeather;
    public getImage = this.weatherUtil.getImage;

    public getWeather(): Observable<ResponseData> {
        return this.http.get<ResponseData>(
            'https://api.weatherapi.com/v1/forecast.json',
            {
                params: {
                    key: this.API_KEY,
                    q: this.city,
                    api: 'yes',
                    days: '4',
                },
            },
        );
    }
}
