import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {TuiAppearance, TuiScrollable, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule} from '@taiga-ui/legacy';

import {CryptoService} from '../../../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-pools',
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
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
        TuiTitle,
    ],
    templateUrl: './pools.component.html',
    styleUrl: './pools.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoolsComponent {
    protected cryptoService = inject(CryptoService);
    protected tokens = toSignal(this.cryptoService.getTokens());
    protected search = '';

    protected lengthPools(value: number): number[] {
        return [...new Array(value).keys()].filter((_, index) => index % 2 === 0);
    }

    protected getTVL(index: number): string {
        const result =
            Number(this.tokens()?.[index]?.priceUsd) +
            Number(this.tokens()?.[index]?.priceUsd) +
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
