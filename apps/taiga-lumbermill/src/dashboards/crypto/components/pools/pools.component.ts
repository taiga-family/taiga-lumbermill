import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiHighlight} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import type {PricesData} from '../../../../services/crypto.service';
import {CryptoService} from '../../../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-pools',
    imports: [
        CommonModule,
        FormsModule,
        TuiAppearance,
        TuiAvatar,
        TuiAvatarStack,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiHighlight,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './pools.component.html',
    styleUrl: './pools.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoolsComponent {
    protected cryptoService = inject(CryptoService);
    protected info$ = this.cryptoService.info$;
    protected search = '';

    protected lengthPools(value: number): number[] {
        return [...new Array(value).keys()].filter((_, index) => index % 2 === 0);
    }

    protected getTVL(data: PricesData[], index: number): string {
        const result = Number(data[index].priceUsd) + Number(data[index].priceUsd) + 1;

        if (result > 100) {
            return (result / (result / 100 + 1)).toFixed(1);
        }

        return result.toFixed(1);
    }

    protected getAPR(data: PricesData[], index: number): string {
        return (10 - Number(this.getTVL(data, index)) / 11).toFixed(1);
    }
}
