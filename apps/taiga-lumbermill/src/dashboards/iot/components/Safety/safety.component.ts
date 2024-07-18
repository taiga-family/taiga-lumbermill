import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiAppearance, TuiGroup} from '@taiga-ui/core';
import {TuiBlock, TuiCheckbox, TuiFade, TuiRadio} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-safety',
    imports: [
        CommonModule,
        TuiRadio,
        ReactiveFormsModule,
        TuiGroup,
        TuiBlock,
        TuiFade,
        TuiCheckbox,
        TuiCardLarge,
        TuiAppearance,
    ],
    templateUrl: './safety.component.html',
    styleUrl: './safety.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafetyComponent {
    protected readonly safetyForm = new FormGroup({
        safetyValue1: new FormControl(true),
        safetyValue2: new FormControl(false),
        safetyValue3: new FormControl(true),
        safetyValue4: new FormControl(false),
    });
}
