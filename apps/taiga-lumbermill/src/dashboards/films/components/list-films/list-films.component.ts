import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiCarousel} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'lmb-list-films',
    imports: [CommonModule, TuiCarousel],
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFilmsComponent {
    protected index = 0;
    protected readonly items = [
        './example.png',
        './example.png',
        './example.png',
        './example.png',
    ];
}
