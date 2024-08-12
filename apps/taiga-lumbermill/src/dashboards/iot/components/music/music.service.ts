import {Injectable} from '@angular/core';

interface Track {
    readonly name: string;
    readonly src: string;
    readonly length: number;
    readonly logo: string;
    readonly performer: string;
}

export const INITIAL_DATA: Track[] = [
    {
        name: 'Against All Odds',
        logo: './music/against.jpg',
        performer: 'Tiko Tiko',
        src: './music/AgainstAllOdds.mp3',
        length: 208,
    },
    {
        name: 'Howling at the Moon',
        logo: './music/howling.avif',
        performer: 'D Fine Us',
        src: './music/HowlingAtTheMoon.mp3',
        length: 195,
    },
];

@Injectable({
    providedIn: 'root',
})
export class MusicService {
    public readonly tracks = INITIAL_DATA;
}

export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}
