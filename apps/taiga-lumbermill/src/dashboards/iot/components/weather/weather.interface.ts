export interface WeatherData {
    readonly icon: string;
}

export interface ResponseLocation {
    readonly name: string;
}

export interface ResponseCondition {
    readonly code: number;
    readonly text: string;
    readonly icon: string;
}

export interface ResponseCurrent {
    readonly condition: ResponseCondition;
    readonly dewpoint_c: string;
    readonly temp_c: string;
    readonly heatindex_c: string;
    readonly humidity: string;
    readonly wind_kph: string;
}

export interface Day {
    readonly mintemp_c: string;
    readonly maxtemp_c: string;
}

export interface ForecastDayList {
    readonly day: Day;
    readonly date: string;
}

export interface ForecastDay {
    readonly forecastday: ForecastDayList[];
}

export interface ResponseData {
    readonly location: ResponseLocation;
    readonly current: ResponseCurrent;
    readonly forecast: ForecastDay;
}
