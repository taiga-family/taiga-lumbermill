import {InjectionToken} from '@angular/core';

export const CLOUD_CODES = [1003, 1006, 1030, 1087, 1135];
export const RAINS_CODES = [
    1009, 1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1240, 1243, 1246,
    1249, 1252, 1276,
];

export const SNOW_CODES = [
    1066, 1069, 1072, 1114, 1117, 1147, 1168, 1171, 1204, 1210, 1213, 1216, 1219, 1222,
    1225, 1237, 1255, 1258, 1261, 1264, 1273, 1279, 1282,
];
export const WEEKDAYS = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
export const WEATHER_KEY = new InjectionToken('', {
    factory: () => '1df6860ee44f43d693d113704242207',
});
