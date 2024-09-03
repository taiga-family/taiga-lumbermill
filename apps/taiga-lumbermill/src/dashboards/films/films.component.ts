import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import FilmViewComponent from './components/film-view/film-view.component';
import {ListFilmsComponent} from './components/list-films/list-films.component';

@Component({
    standalone: true,
    selector: 'lmb-film',
    imports: [CommonModule, FilmViewComponent, ListFilmsComponent, RouterOutlet],
    templateUrl: './films.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmComponent {}
