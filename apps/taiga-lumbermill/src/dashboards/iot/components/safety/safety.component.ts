import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiAppearance, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiCheckbox} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

import {SafetyService} from './safety.service';

@Component({
    standalone: true,
    selector: 'lmb-safety',
    imports: [
        ReactiveFormsModule,
        TuiAppearance,
        TuiBlock,
        TuiCardLarge,
        TuiCheckbox,
        TuiGroup,
        TuiTitle,
    ],
    templateUrl: './safety.component.html',
    styleUrl: './safety.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafetyComponent {
    protected safetyService = inject(SafetyService).safetyData;
    protected safetyForm = new FormArray(
        this.safetyService.map((item) => new FormControl(item.state)),
    );
}
