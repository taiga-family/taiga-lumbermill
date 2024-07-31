import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {
    TuiAlertService,
    TuiAppearance,
    TuiButton,
    TuiDialog,
    TuiHint,
    TuiIcon,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiPushService} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';

import {MinterService} from './minter.service';

@Component({
    standalone: true,
    selector: 'lmb-minter',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAppearance,
        TuiAutoFocus,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiDialog,
        TuiHeader,
        TuiHint,
        TuiIcon,
        TuiInputModule,
        TuiInputNumberModule,
        TuiTitle,
    ],
    templateUrl: './minter.component.html',
    styleUrl: './minter.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinterComponent {
    protected readonly minterService = inject(MinterService).minterData;
    protected readonly push = inject(TuiPushService);
    protected readonly alert = inject(TuiAlertService);
    protected minterForm = new FormArray(
        this.minterService.map((item) => new FormControl(item.defaultValue)),
    );

    protected success = false;
    protected openIcon = false;
    protected warningIcon = false;
    protected urlIcon = '';

    protected showDialog(): void {
        this.openIcon = true;
    }

    protected deploy(): void {
        let required = true;

        for (let i = 0; i < this.minterForm.length; i++) {
            if (
                this.minterService[i].defaultValue === this.minterForm.controls[i].value
            ) {
                required = false;
            }
        }

        if (!required) {
            this.alert
                .open('Тot all required fields are filled in', {
                    label: 'Try again',
                    status: 'warning',
                })
                .subscribe();

            return;
        }

        if (this.urlIcon === '') {
            this.warningIcon = true;

            return;
        }

        this.push
            .open('Minted your token', {
                heading: 'Success',
                icon: 'check',
            })
            .subscribe();
        this.success = true;
    }
}
