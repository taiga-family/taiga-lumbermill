import {CommonModule, NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAppearance, TuiGroup, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiCheckbox, TuiRadioList} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

import {LightingService} from './lighting.service';

@Component({
    standalone: true,
    selector: 'lmb-lighting',
    imports: [
        CommonModule,
        FormsModule,
        NgClass,
        ReactiveFormsModule,
        TuiAppearance,
        TuiBlock,
        TuiCardLarge,
        TuiCheckbox,
        TuiGroup,
        TuiIcon,
        TuiRadioList,
        TuiTitle,
    ],
    templateUrl: './lighting.component.html',
    styleUrl: './lighting.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightingComponent {
    protected lightingService = inject(LightingService).lightingData;
    protected lightingForm = new FormArray(
        this.lightingService.map((item) => new FormControl(item.state)),
    );
}
