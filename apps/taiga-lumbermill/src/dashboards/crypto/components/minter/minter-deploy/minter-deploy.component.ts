import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton, TuiDialog} from '@taiga-ui/core';
import {TuiAvatar, TuiPushService} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';

import type {TokenMinter} from '../minter.component';
import {MinterService} from './minter-deploy.service';

@Component({
    standalone: true,
    selector: 'lmb-minter-deploy',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiDialog,
        TuiInputModule,
        TuiInputNumberModule,
    ],
    templateUrl: './minter-deploy.component.html',
    styleUrl: './minter-deploy.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinterDeployComponent {
    protected readonly minterService = inject(MinterService).minterData;
    protected readonly push = inject(TuiPushService);
    protected readonly alert = inject(TuiAlertService);
    protected minterForm = new FormArray(
        this.minterService.map((item) => new FormControl(item.defaultValue)),
    );

    protected openIcon = false;
    protected warningIcon = false;
    protected success = false;
    protected urlIcon = '';

    @Output()
    public readonly tokenMinterChange = new EventEmitter<TokenMinter>();

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
        this.tokenMinterChange.emit({
            success: true,
            urlIcon: this.urlIcon,
            token: this.minterForm.controls[0].value ?? '',
            symbol: this.minterForm.controls[1].value ?? '',
            amount: Number(this.minterForm.controls[2].value) ?? 0,
        });
    }
}
