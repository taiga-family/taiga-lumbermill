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
    protected clouds = [1003, 1006, 1030, 1087, 1135];
    protected rain = [
        1009, 1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1240, 1243,
        1246, 1249, 1252, 1276,
    ];

    protected snow = [
        1066, 1069, 1072, 1114, 1117, 1147, 1168, 1171, 1204, 1210, 1213, 1216, 1219,
        1222, 1225, 1237, 1255, 1258, 1261, 1264, 1273, 1279, 1282,
    ];

    protected days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    public readonly weatherData = INITIAL_DATA;

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

        return this.days[date.getDay()];
    }

    public getTypeOfWeather(value: number | undefined): string {
        if (value === undefined) {
            return '';
        }

        if (this.clouds.includes(value)) {
            return 'clouds';
        }

        if (this.rain.includes(value)) {
            return 'rain';
        }

        if (this.snow.includes(value)) {
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
