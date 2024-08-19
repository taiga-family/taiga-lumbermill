import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

import {animals} from '../administrator/administrator.component';

@Component({
    standalone: true,
    selector: 'lmb-animal-page',
    imports: [CommonModule, TuiAppearance, TuiAvatar, TuiBadge, TuiHeader, TuiTitle],
    templateUrl: './animal.component.html',
    styleUrl: './animal.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalComponent {
    private readonly activatedRoute = inject(ActivatedRoute);
    protected id = toSignal(this.activatedRoute.params)()?.['id'];
    protected animals = animals;
}
