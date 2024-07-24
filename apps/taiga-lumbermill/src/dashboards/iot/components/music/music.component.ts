import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiSliderComponent} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {getRandomInt, MusicService} from './music.service';

@Component({
    standalone: true,
    selector: 'lmb-music',
    imports: [
        CommonModule,
        TuiAppearance,
        TuiCardLarge,
        TuiTitle,
        TuiHeader,
        TuiSliderComponent,
        FormsModule,
        ReactiveFormsModule,
        TuiIcon,
        TuiMedia,
        TuiButton,
        TuiAppearance,
    ],
    templateUrl: './music.component.html',
    styleUrl: './music.component.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicComponent {
    protected musicService = inject(MusicService).musicData;
    protected curMusic = 0;
    protected curTime = 0;
    protected volume = 1;
    protected repeat = false;
    protected shuffle = false;
    protected paused = true;

    protected get logoPlay(): string {
        return this.paused ? '@tui.circle-play' : '@tui.circle-stop';
    }

    protected shuffleButton(): void {
        this.shuffle = !this.shuffle;
    }

    protected repeatButton(): void {
        this.repeat = !this.repeat;
    }

    protected playButton(): void {
        this.paused = !this.paused;
    }

    protected nextMusic(): void {
        if (this.repeat) {
            this.curTime = 0;

            return;
        }

        if (this.shuffle) {
            this.curMusic = getRandomInt(this.musicService.length);
            this.paused = true;

            return;
        }

        this.curTime = 0;
        this.paused = true;
        this.curMusic = (this.curMusic + 1) % this.musicService.length;
    }

    protected previousMusic(): void {
        if (this.repeat) {
            this.curTime = 0;

            return;
        }

        if (this.shuffle) {
            this.curMusic = getRandomInt(this.musicService.length);
            this.paused = true;

            return;
        }

        this.curTime = 0;
        this.paused = true;
        this.curMusic =
            this.curMusic - 1 < 0 ? this.musicService.length - 1 : this.curMusic - 1;
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
