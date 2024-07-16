import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiCheckbox, TuiRadioList} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'app-lighting',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiRadioList,
        TuiTitle,
        TuiCheckbox,
        TuiGroup,
        TuiBlock,
    ],
    templateUrl: './lighting.component.html',
    styleUrl: './lighting.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightingComponent {
    protected readonly safetyForm = new FormGroup({
        safetyValue1: new FormControl(true),
        safetyValue2: new FormControl(false),
        safetyValue3: new FormControl(true),
        safetyValue4: new FormControl(false),
    });
}
