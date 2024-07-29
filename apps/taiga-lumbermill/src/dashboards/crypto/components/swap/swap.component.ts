import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiExpand,
    TuiIcon,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiFade} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

import {SwapService} from './swap.service';

@Component({
    standalone: true,
    selector: 'lmb-swap',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiActiveZone,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiExpand,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiInputModule,
        TuiInputNumberModule,
        TuiObscured,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './swap.component.html',
    styleUrl: './swap.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapComponent {
    protected swapService = inject(SwapService).swapData;
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('1'),
    });

    protected open = false;

    protected onClick(): void {
        this.open = !this.open;
    }

    protected onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    protected onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
