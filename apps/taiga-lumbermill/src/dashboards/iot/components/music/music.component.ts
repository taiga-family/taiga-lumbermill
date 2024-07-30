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
    protected musicService = inject(MusicService).tracks;
    protected activeIndex = 0;
    protected time = 0;
    protected volume = 1;
    protected repeat = false;
    protected shuffle = false;
    protected paused = true;

    protected nextMusic(): void {
        if (this.repeat) {
            this.time = 0;

            return;
        }

        if (this.shuffle) {
            this.activeIndex = getRandomInt(this.musicService.length);
            this.paused = true;

            return;
        }

        this.time = 0;
        this.paused = false;
        this.activeIndex = (this.activeIndex + 1) % this.musicService.length;
    }

    protected previousTrack(): void {
        if (this.repeat) {
            this.time = 0;

            return;
        }

        if (this.shuffle) {
            this.activeIndex = getRandomInt(this.musicService.length);
            this.paused = true;

            return;
        }

        this.time = 0;
        this.paused = false;
        this.activeIndex =
            this.activeIndex - 1 < 0
                ? this.musicService.length - 1
                : this.activeIndex - 1;
    }

    protected getMinutes(value: number | null): string {
        if (value === null) {
            return '00';
        }

        value = Math.trunc(value);

        return (
            (Math.trunc(value / 60) <= 9 ? '0' : '') + Math.trunc(value / 60).toString()
        );
    }

    protected getSeconds(value: number | null): string {
        if (value === null) {
            return '00';
        }

        value = Math.trunc(value);

        return (value % 60 <= 9 ? '0' : '') + (value % 60).toString();
    }
}
