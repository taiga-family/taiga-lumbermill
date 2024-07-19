import {Injectable} from '@angular/core';

interface WeatherData {
    readonly day: string;
    readonly temp: string;
    readonly icon: string;
}

export const INITIAL_DATA: WeatherData[] = [
    {day: 'Fri', temp: '21°/25°', icon: '@tui.snowflake'},
    {day: 'Mon', temp: '30°/33°', icon: '@tui.sun'},
    {day: 'Tue', temp: '17°/23°', icon: '@tui.droplet'},
];

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    public readonly weatherData = INITIAL_DATA;
}
