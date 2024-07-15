import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiGroup} from '@taiga-ui/core';
import {TuiBlock, TuiCheckbox, TuiFade, TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'app-safety',
    imports: [
        CommonModule,
        TuiRadio,
        ReactiveFormsModule,
        TuiGroup,
        TuiBlock,
        TuiFade,
        TuiCheckbox,
    ],
    templateUrl: './safety.component.html',
    styleUrl: './safety.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafetyComponent {
    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl(true),
        testValue4: new FormControl(false),
    });
}
