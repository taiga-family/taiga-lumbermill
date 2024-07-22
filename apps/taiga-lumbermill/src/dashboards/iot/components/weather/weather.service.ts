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
    protected readonly city = 'Moscow';
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

    public getTypeOfWeather(value: number): string {
        const clouds = [1003, 1006, 1030, 1087, 1135];
        const rain = [
            1009, 1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1240, 1243,
            1246, 1249, 1252, 1276,
        ];
        const snow = [
            1066, 1069, 1072, 1114, 1117, 1147, 1168, 1171, 1204, 1210, 1213, 1216, 1219,
            1222, 1225, 1237, 1255, 1258, 1261, 1264, 1273, 1279, 1282,
        ];

        if (clouds.includes(value)) {
            return 'clouds';
        }

        if (rain.includes(value)) {
            return 'rain';
        }

        if (snow.includes(value)) {
            return 'snow';
        }

        return 'sun';
    }

    public getImage(value: number): string {
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
