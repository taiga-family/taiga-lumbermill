import {CommonModule, DecimalPipe} from '@angular/common';
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
import {TuiAppearance, TuiButton, TuiDialogService, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSkeleton} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TuiInputNumberModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {CoinIconPipe} from '../../pipes/coin-icon.pipe';
import {CryptoService} from '../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-staking',
    imports: [
        CoinIconPipe,
        CommonModule,
        DecimalPipe,
        FormsModule,
        TuiAppearance,
        TuiAutoFocus,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiInputNumberModule,
        TuiSkeleton,
        TuiTitle,
    ],
    templateUrl: './staking.component.html',
    styleUrl: './staking.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StakingComponent {
    private readonly dialogs = inject(TuiDialogService);
    private readonly cryptoService = inject(CryptoService);
    protected tokens = toSignal(this.cryptoService.tokens);
    protected price = computed(
        () =>
            this.amount() *
            (Number(
                (this.tokens() ?? []).find((token) => token.symbol === 'BTC')?.priceUsd,
            ) ?? 0),
    );

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
}
