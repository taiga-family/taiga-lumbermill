import {Injectable} from '@angular/core';

@Injectable()
export class WeatherUtil {
    public clouds = [1003, 1006, 1030, 1087, 1135];
    public rain = [
        1009, 1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1240, 1243,
        1246, 1249, 1252, 1276,
    ];

    public snow = [
        1066, 1069, 1072, 1114, 1117, 1147, 1168, 1171, 1204, 1210, 1213, 1216, 1219,
        1222, 1225, 1237, 1255, 1258, 1261, 1264, 1273, 1279, 1282,
    ];

    public days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

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
