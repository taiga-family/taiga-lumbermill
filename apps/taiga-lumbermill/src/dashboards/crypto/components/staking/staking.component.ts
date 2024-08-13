import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {
    TuiAppearance,
    TuiButton,
    TuiDialog,
    TuiDialogService,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TuiInputNumberModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import type {PricesData} from '../../../../services/crypto.service';
import {CryptoService} from '../../../../services/crypto.service';
import {CoinIconPipe} from '../../pipes/coin-icon.pipe';

@Component({
    standalone: true,
    selector: 'lmb-staking',
    imports: [
        CoinIconPipe,
        CommonModule,
        FormsModule,
        TuiAppearance,
        TuiAutoFocus,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiDialog,
        TuiHeader,
        TuiInputNumberModule,
        TuiTitle,
    ],
    templateUrl: './staking.component.html',
    styleUrl: './staking.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StakingComponent {
    private readonly dialogs = inject(TuiDialogService);
    protected cryptoService = inject(CryptoService);
    protected tokens = toSignal(this.cryptoService.getTokens());
    protected price = computed(() => this.getPrice(this.tokens(), 'btc', this.amount()));

    protected inputStake = 0;
    protected inputUnstake = 0;
    protected amount = signal(0);
    protected available = 100;

    protected stake = false;

    protected addAmount(add: number): void {
        this.amount.update((val) => val + add);
    }

    protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.dialogs.open(content).subscribe();
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
