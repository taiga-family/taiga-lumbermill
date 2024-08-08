import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'lmb-list-films',
    imports: [CommonModule],
    templateUrl: './list-films.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilmsComponent {}
