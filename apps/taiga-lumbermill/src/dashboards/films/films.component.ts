import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

import {ListFilmsComponent} from './components/list-films/list-films.component';

@Component({
    standalone: true,
    selector: 'lmb-film',
    imports: [CommonModule, ListFilmsComponent, TuiAppearance, TuiCardLarge],
    templateUrl: './films.component.html',
    styleUrl: './films.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmComponent {}
