import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    protected readonly push = inject(TuiPushService);
    protected readonly alert = inject(TuiAlertService);
    protected token = '';
    protected description = '';
    protected symbol = '';
    protected amount = 0;
    protected open = false;
    protected urlIcon = '';

    protected showDialog(): void {
        this.open = true;
    }

    protected deploy(): void {
        if (
            this.urlIcon === '' ||
            this.amount === 0 ||
            this.token === '' ||
            this.symbol === ''
        ) {
            this.alert
                .open('Тot all required fields are filled in', {
                    label: 'Try again',
                    status: 'warning',
                })
                .subscribe();
        }

        this.push
            .open('Minted yout token', {
                heading: 'Success',
                icon: 'check',
            })
            .subscribe();
    }
}
