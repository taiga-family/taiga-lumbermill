import {Injectable} from '@angular/core';

interface SafetyData {
    readonly name: string;
    readonly state: boolean;
}

export const INITIAL_DATA: SafetyData[] = [
    {name: 'Alarm system', state: true},
    {name: 'Close the curtains', state: false},
    {name: 'Video monitoring', state: true},
    {name: 'Enable gas sensor notification', state: false},
];

@Injectable({
    providedIn: 'root',
})
export class SafetyService {
    public readonly safetyData = INITIAL_DATA;
}
