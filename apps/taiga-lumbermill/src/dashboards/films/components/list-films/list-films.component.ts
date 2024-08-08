import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCarousel} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-list-films',
    imports: [CommonModule, TuiButton, TuiCarousel, TuiHeader, TuiTitle],
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilmsComponent {
    protected index = 0;
    protected open = -1;
    protected readonly items = [
        './music/against.jpg',
        './music/howling.avif',
        './music/against.jpg',
        './music/howling.avif',
        './music/against.jpg',
        './music/howling.avif',
        './music/against.jpg',
        './music/howling.avif',
        './music/against.jpg',
        './music/howling.avif',
        './music/against.jpg',
        './music/howling.avif',
    ];

    protected openFilm(value: number): void {
        this.index = value - 1;
        this.open = value - 1;
    }
}
