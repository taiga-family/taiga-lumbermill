import {Injectable} from '@angular/core';

interface Music {
    readonly name: string;
    readonly src: string;
    readonly logo: string;
    readonly performer: string;
}

export const INITIAL_DATA: Music[] = [
    {
        name: 'Against All Odds',
        logo: '/music/against.jpg',
        performer: 'Tiko Tiko',
        src: './music/AgainstAllOdds.mp3',
    },
    {
        name: 'Howling at the Moon',
        logo: '/music/howling.avif',
        performer: 'D Fine Us',
        src: './music/HowlingAtTheMoon.mp3',
    },
];

@Injectable({
    providedIn: 'root',
})
export class MusicService {
    public readonly musicData = INITIAL_DATA;
    public curMusic = 0;
    public curTime = 0;
    public volume = 1;
    public repeat = false;
    public shuffle = false;
    public paused = true;

    public get logoPlay(): string {
        return this.paused ? '@tui.circle-play' : '@tui.circle-stop';
    }

    public shuffleButton(): void {
        this.shuffle = !this.shuffle;
    }

    public repeatButton(): void {
        this.repeat = !this.repeat;
    }

    public playButton(): void {
        this.paused = !this.paused;
    }

    public nextMusic(): void {
        this.paused = true;

        if (this.repeat) {
            this.curTime = 0;

            return;
        }

        if (this.shuffle) {
            this.curMusic = getRandomInt(this.musicData.length);

            return;
        }

        this.curTime = 0;
        this.curMusic = (this.curMusic + 1) % this.musicData.length;
        this.paused = false;
    }

    public previousMusic(): void {
        if (this.repeat) {
            this.curTime = 0;

            return;
        }

        if (this.shuffle) {
            this.curMusic = getRandomInt(this.musicData.length);

            return;
        }

        this.curTime = 0;
        this.paused = true;
        this.curMusic =
            this.curMusic - 1 < 0 ? this.musicData.length - 1 : this.curMusic - 1;
    }

    public getMinutes(value: number | null): string {
        if (value === null) {
            return '00';
        }

        value = Math.trunc(value);

        return (
            (Math.trunc(value / 60) < 9 ? '0' : '') + Math.trunc(value / 60).toString()
        );
    }

    public getSeconds(value: number | null): string {
        if (value === null) {
            return '00';
        }

        value = Math.trunc(value);

        return (value % 60 < 9 ? '0' : '') + (value % 60).toString();
    }
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}
