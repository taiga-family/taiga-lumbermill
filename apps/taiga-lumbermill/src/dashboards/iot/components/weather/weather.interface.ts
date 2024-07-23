export interface WeatherData {
    readonly day: string;
    readonly temp: string;
    readonly icon: string;
}

export interface ResponseLocation {
    name: string;
}

export interface ResponseCondition {
    code: number;
    text: string;
    icon: string;
}

export interface ResponseCurrent {
    condition: ResponseCondition;
    dewpoint_c: string;
    temp_c: string;
    heatindex_c: string;
    humidity: string;
    wind_kph: string;
}

export interface Day {
    mintemp_c: string;
    maxtemp_c: string;
}

export interface ForecastDayList {
    day: Day;
    date: string;
}

export interface ForecastDay {
    forecastday: ForecastDayList[];
}

export interface ResponseData {
    location: ResponseLocation;
    current: ResponseCurrent;
    forecast: ForecastDay;
}
