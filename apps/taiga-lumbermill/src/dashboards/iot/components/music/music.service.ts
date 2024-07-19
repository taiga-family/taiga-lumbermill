import {Injectable} from '@angular/core';

interface MusicData {
    readonly name: string;
    readonly value: number;
}

export const INITIAL_DATA: MusicData[] = [
    {name: 'Play', value: 60},
    {name: 'Volume', value: 0},
];

@Injectable({
    providedIn: 'root',
})
export class MusicService {
    public readonly musicData = INITIAL_DATA;
}
