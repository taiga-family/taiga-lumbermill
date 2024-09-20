import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import type {Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiAppearance, TuiScrollable, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiSkeleton} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule} from '@taiga-ui/legacy';

import {CoinIconPipe} from '../../pipes/coin-icon.pipe';
import {CryptoService} from '../../services/crypto.service';

export interface TableData {
    readonly Pair: string;
    readonly TVL: string;
    readonly APR: string;
    readonly symbolFirst: string;
    readonly symbolSecond: string;
}

@Component({
    standalone: true,
    selector: 'lmb-pools',
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        CoinIconPipe,
        CommonModule,
        FormsModule,
        TuiAppearance,
        TuiAvatar,
        TuiAvatarStack,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiInputModule,
        TuiScrollable,
        TuiScrollbar,
        TuiSkeleton,
        TuiTable,
        TuiTitle,
    ],
    templateUrl: './pools.component.html',
    styleUrl: './pools.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoolsComponent {
    protected cryptoService = inject(CryptoService);
    protected tokens = toSignal(this.cryptoService.tokens);
    protected tableData: Signal<TableData[]> = computed(() => {
        const tokens = this.tokens() || [];

        return tokens
            .map((_, index) => ({
                Pair: `${tokens?.[index]?.symbol.toUpperCase()}/${tokens?.[index + 1]?.symbol.toUpperCase()}`,
                TVL: this.getTVL(index),
                APR: this.getAPR(index),
                symbolFirst: tokens?.[index]?.symbol.toLowerCase(),
                symbolSecond: tokens?.[index + 1]?.symbol.toLowerCase(),
            }))
            .filter((_, index) => index % 2 === 0)
            .filter((item) => item.Pair.includes(this.search().toUpperCase()));
    });

    protected columns = ['Pair', 'TVL', 'APR'];
    protected search = signal('');

    protected lengthPools(value: number): number[] {
        return [...new Array(value).keys()].filter((_, index) => index % 2 === 0);
    }

    protected getTVL(index: number): string {
        const result =
            Number(this.tokens()?.[index]?.priceUsd) +
            Number(this.tokens()?.[index + 1]?.priceUsd) +
            1;

        if (result > 100) {
            return (result / (result / 100 + 1)).toFixed(1);
        }

        return result.toFixed(1);
    }

    protected getAPR(index: number): string {
        return (10 - Number(this.getTVL(index)) / 11).toFixed(1);
    }
}
