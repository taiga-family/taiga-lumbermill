import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import type {Observable} from 'rxjs';

import {WEATHER_KEY} from './weather.constants';
import type {ResponseData} from './weather.interface';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private readonly http = inject(HttpClient);
    private readonly KEY = inject(WEATHER_KEY);

    public getWeather(): Observable<ResponseData> {
        return this.http.get<ResponseData>(
            'https://api.weatherapi.com/v1/forecast.json',
            {
                params: {
                    key: this.KEY,
                    q: 'London',
                    api: 'yes',
                    days: '3',
                },
            },
        );
    }
}
