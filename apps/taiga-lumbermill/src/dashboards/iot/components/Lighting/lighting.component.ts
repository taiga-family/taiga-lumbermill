import {CommonModule, NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiGroup, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiCheckbox, TuiRadioList} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'lmb-lighting',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiRadioList,
        TuiTitle,
        TuiCheckbox,
        TuiGroup,
        TuiBlock,
        NgClass,
        TuiIcon,
    ],
    templateUrl: './lighting.component.html',
    styleUrl: './lighting.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightingComponent {
    protected readonly namesRoom = ['Kitchen', 'Bedroom', 'Bathroom'];
    protected readonly safetyForm = new FormGroup({
        Kitchen: new FormControl(true),
        Bedroom: new FormControl(false),
        Bathroom: new FormControl(true),
    });
}
