import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiDialog, TuiHint, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';

import type {PricesData} from '../../../../services/crypto.service';
import {CryptoService} from '../../../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-staking',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAppearance,
        TuiAutoFocus,
        TuiAvatar,
        TuiButton,
        TuiButton,
        TuiCardLarge,
        TuiDialog,
        TuiHeader,
        TuiHint,
        TuiInputModule,
        TuiInputNumberModule,
        TuiTitle,
    ],
    templateUrl: './staking.component.html',
    styleUrl: './staking.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StakingComponent {
    protected cryptoService = inject(CryptoService);
    protected info = toSignal(this.cryptoService.getTokens());
    protected price = computed(() => this.getPrice(this.info(), 'btc', this.amount()));

    protected inputStake = 0;
    protected inputUnstake = 0;
    protected amount = signal(0);
    protected available = 100;

    protected openStake = false;
    protected openUnstake = false;

    protected addAmount(add: number): void {
        this.amount.update((val) => val + add);
    }

    protected getPrice(
        data: PricesData[] | undefined,
        title: string,
        value: number,
    ): string {
        for (const token of data ?? []) {
            if (token && token.symbol.toLowerCase() === title.toLowerCase()) {
                return (Number(token.priceUsd) * value).toFixed(2);
            }
        }

        return value.toFixed(2);
    }
}
