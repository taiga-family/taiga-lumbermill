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
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiInputInline} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

import {CryptoService} from '../../../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-swap',
    imports: [
        CommonModule,
        FormsModule,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiHeader,
        TuiIcon,
        TuiInputInline,
        TuiTitle,
    ],
    templateUrl: './swap.component.html',
    styleUrl: './swap.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapComponent {
    protected readonly cryptoService = inject(CryptoService);
    protected readonly tokens = toSignal(this.cryptoService.tokens);
    protected readonly priceFrom = computed(() => this.getPrice(this.tokenFrom()));

    protected readonly priceTo = computed(() => this.getPrice(this.tokenTo()));

    protected readonly titles = ['From', 'To'];

    protected readonly from = signal(0);
    protected readonly to = signal(0);
    protected readonly tokenFrom = signal('eth');
    protected readonly tokenTo = signal('btc');

    protected newTokenFrom(title: string): void {
        this.tokenFrom.set(title);
        this.newSwapFrom();
    }

    protected newTokenTo(title: string): void {
        this.tokenTo.set(title);
        this.newSwapTo();
    }

    protected getPrice(title: string): number {
        return (
            Number(
                (this.tokens() ?? []).find(
                    (token) => token.symbol.toLowerCase() === title.toLowerCase(),
                )?.priceUsd,
            ) || 0
        );
    }

    protected newSwapFrom(): void {
        this.to.set(
            Number(
                ((this.priceFrom() * Number(this.from())) / this.priceTo()).toFixed(2),
            ),
        );
    }

    protected newSwapTo(): void {
        this.from.set(
            Number(((this.priceTo() * Number(this.to())) / this.priceFrom()).toFixed(2)),
        );
    }
}
