import {CommonModule, DatePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {
    TuiAppearance,
    TuiBreakpointService,
    TuiButton,
    TuiExpand,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiCarousel, TuiRating} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {FilmsService} from '../../films.service';

@Component({
    standalone: true,
    selector: 'lmb-list-films',
    imports: [
        CommonModule,
        DatePipe,
        FormsModule,
        RouterLink,
        TuiAppearance,
        TuiButton,
        TuiButton,
        TuiCardLarge,
        TuiCarousel,
        TuiExpand,
        TuiHeader,
        TuiRating,
        TuiTitle,
    ],
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilmsComponent {
    protected readonly breakpoint$ = inject(TuiBreakpointService);
    protected listFilmsService = inject(FilmsService).filmsData;
    protected indexTop = 0;
    protected indexBottom = 0;
    protected openTop = -1;
    protected openBottom = -1;
}
