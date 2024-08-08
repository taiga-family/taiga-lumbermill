import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ListFilmsComponent} from './components/list-films/list-films.component';

@Component({
    standalone: true,
    selector: 'lmb-film',
    imports: [CommonModule, ListFilmsComponent],
    templateUrl: './films.component.html',
    styleUrl: './films.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmComponent {}
