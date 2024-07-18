import {Injectable} from '@angular/core';

interface LighingData {
    readonly room: string;
    readonly state: boolean;
}

export const INITIAL_DATA: LighingData[] = [
    {room: 'Kitchen', state: true},
    {room: 'Bedroom', state: false},
    {room: 'Bathroom', state: true},
];

@Injectable({
    providedIn: 'root',
})
export class LightingService {
    public readonly lightingData = INITIAL_DATA;
}
