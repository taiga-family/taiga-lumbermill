import {Injectable} from '@angular/core';

interface MusicInputs {
    readonly name: string;
    readonly value: number;
}

export const INITIAL_INPUTS: MusicInputs[] = [
    {name: 'Play', value: 0},
    {name: 'Volume', value: 0},
];

interface Music {
    readonly name: string;
    readonly logo: string;
    readonly performer: string;
    readonly length: number;
}

export const INITIAL_MUSIC: Music[] = [
    {name: 'Believer', logo: '/music_1.jpg', performer: 'Imagine Dragons', length: 203},
    {name: 'Test1', logo: '/music_1.jpg', performer: 'Imagine Dragons2', length: 64},
];

interface MusicData {
    readonly inputs: MusicInputs[];
    readonly musics: Music[];
}

export const INITIAL_DATA: MusicData = {
    inputs: INITIAL_INPUTS,
    musics: INITIAL_MUSIC,
};

@Injectable({
    providedIn: 'root',
})
export class MusicService {
    public readonly musicData = INITIAL_DATA;
    public curMusic = 0;
    public repeat = false;
    public shuffle = false;
    public play = true;

    public get logoPlay(): string {
        return this.play ? '@tui.circle-play' : '@tui.circle-stop';
    }

    public shuffleButton(): void {
        this.shuffle = !this.shuffle;
    }

    public repeatButton(): void {
        this.repeat = !this.repeat;
    }

    public playButton(): void {
        this.play = !this.play;
    }

    public nextMusic(): void {
        this.curMusic = (this.curMusic + 1) % this.musicData.musics.length;
    }

    public previousMusic(): void {
        this.curMusic =
            this.curMusic - 1 < 0 ? this.musicData.musics.length - 1 : this.curMusic - 1;
    }

    public getMinutes(value: number | null): string {
        if (value === null) {
            return '00';
        }

        return (
            (Math.trunc(value / 60) < 9 ? '0' : '') + Math.trunc(value / 60).toString()
        );
    }

    public getSecods(value: number | null): string {
        if (value === null) {
            return '00';
        }

        return (value % 60 < 9 ? '0' : '') + (value % 60).toString();
    }
}
