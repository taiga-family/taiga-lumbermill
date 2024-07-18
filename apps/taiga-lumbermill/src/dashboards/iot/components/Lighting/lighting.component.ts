import {CommonModule, NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiGroup, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiCheckbox, TuiRadioList} from '@taiga-ui/kit';

import {LightingService} from './lighting.service';

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
    protected lightingService = inject(LightingService);
    protected safetyForm = new FormArray(
        this.lightingService.lightingData.map((item) => new FormControl(item.state)),
    );
}
