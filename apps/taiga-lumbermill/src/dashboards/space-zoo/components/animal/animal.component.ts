import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {TuiAppearance, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiProgress} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {map, startWith, takeWhile, timer} from 'rxjs';

import {actions, animals} from '../administrator/administrator.component';

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
    protected actions = actions;
    protected readonly max = 100;

    protected states = actions.map((_) => signal(false));
    protected tags = computed(() =>
        this.animals[this.id].tags.filter((val) => this.checkComplete(val)),
    );

    protected values$ = actions.map((_, ind) =>
        computed(() =>
            this.states[ind]()
                ? timer(140, 80).pipe(
                      map((i) => i + 30),
                      startWith(30),
                      takeWhile((value) => value <= this.max),
                  )
                : null,
        ),
    );

    protected checkComplete(value: string): boolean {
        return (
            !(value === 'Needs a doctor' && this.states[0]()) &&
            !(value === 'Play' && this.states[1]()) &&
            !(value === 'Needs to be cleaned' && this.states[2]()) &&
            !(value === 'Need food' && this.states[3]())
        );
    }

    protected inArray(value: string): boolean {
        return this.animals[this.id].action.includes(value);
    }
}
