import {CommonModule, DatePipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCarousel} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

import {FilmsService} from '../../films.service';

@Component({
    standalone: true,
    selector: 'lmb-list-films',
    imports: [
        CommonModule,
        DatePipe,
        TuiButton,
        TuiButton,
        TuiCarousel,
        TuiHeader,
        TuiTitle,
    ],
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilmsComponent {
    protected listFilmsService = inject(FilmsService).filmsData;
    protected index = 0;
    protected open = -1;

    @Output()
    public readonly playChange = new EventEmitter<number>();

    protected openFilm(value: number): void {
        this.open = value;
    }

    protected watch(value: number): void {
        this.playChange.emit(value);
    }
}
