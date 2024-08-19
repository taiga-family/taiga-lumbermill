import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {TuiAppearance, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiProgress} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {map, startWith, takeWhile, timer} from 'rxjs';

import {animals} from '../administrator/administrator.component';

@Component({
    standalone: true,
    selector: 'lmb-animal-page',
    imports: [
        CommonModule,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiCardLarge,
        TuiHeader,
        TuiProgress,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './animal.component.html',
    styleUrl: './animal.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalComponent {
    private readonly activatedRoute = inject(ActivatedRoute);
    protected id = toSignal(this.activatedRoute.params)()?.['id'];
    protected animals = animals;
    protected readonly max = 100;
    protected readonly value$ = timer(140, 80).pipe(
        map((i) => i + 30),
        startWith(30),
        takeWhile((value) => value <= this.max),
    );

    protected states = animals[this.id].action.map((_) => false);
}
