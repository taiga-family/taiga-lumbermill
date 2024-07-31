import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiSliderComponent} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

import {getRandomInt, MusicService} from './music.service';

@Component({
    standalone: true,
    selector: 'lmb-music',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiIcon,
        TuiMedia,
        TuiSliderComponent,
    ],
    templateUrl: './music.component.html',
    styleUrl: './music.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicComponent {
    protected tracks = inject(MusicService).tracks;
    protected activeIndex = 0;
    protected time = 0;
    protected volume = 1;
    protected repeat = false;
    protected shuffle = false;
    protected paused = true;

    protected nextTrack(audio: HTMLAudioElement): void {
        this.time = 0;

        if (this.repeat) {
            return;
        }

        this.activeIndex = this.shuffle
            ? getRandomInt(this.tracks.length)
            : (this.activeIndex + 1) % this.tracks.length;

        setTimeout(async () => audio.play(), 1);
    }

    protected previousTrack(audio: HTMLAudioElement): void {
        this.time = 0;

        if (this.repeat) {
            return;
        }

        const nextItem =
            this.activeIndex - 1 < 0 ? this.tracks.length - 1 : this.activeIndex - 1;

        this.activeIndex = this.shuffle ? getRandomInt(this.tracks.length) : nextItem;
        setTimeout(async () => audio.play(), 1);
    }

    protected getMinutes(value: number): string {
        return (value / 60 <= 9 ? '0' : '') + Math.trunc(value / 60).toString();
    }

    protected getSeconds(value: number): string {
        value = Math.trunc(value);

        return (value % 60 <= 9 ? '0' : '') + (value % 60).toString();
    }
}
