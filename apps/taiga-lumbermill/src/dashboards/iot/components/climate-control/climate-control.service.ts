import {Injectable} from '@angular/core';

interface ClimateControlData {
    readonly name: string;
    readonly value: number;
}

export const INITIAL_DATA: ClimateControlData[] = [
    {name: 'Room temperature C°', value: 32},
    {name: 'Water temperature', value: 0},
    {name: 'Air humidity, %', value: 10},
];

@Injectable({
    providedIn: 'root',
})
export class ClimateControlService {
    public readonly climateControlData = INITIAL_DATA;
}
