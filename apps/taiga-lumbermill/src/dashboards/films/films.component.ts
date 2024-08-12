import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

import FilmViewComponent from './components/film-view/film-view.component';
import {ListFilmsComponent} from './components/list-films/list-films.component';

@Component({
    standalone: true,
    selector: 'lmb-film',
    imports: [
        CommonModule,
        FilmViewComponent,
        ListFilmsComponent,
        RouterOutlet,
        TuiAppearance,
        TuiCardLarge,
    ],
    templateUrl: './films.component.html',
    styleUrl: './films.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmComponent {}
