import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiExpand,
    TuiIcon,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiFade, TuiInputInline} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

import type {PricesData} from '../../../../services/crypto.service';
import {CryptoService} from '../../../../services/crypto.service';
import {SwapService} from './swap.service';

@Component({
    standalone: true,
    selector: 'lmb-swap',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiActiveZone,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiExpand,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiInputInline,
        TuiInputModule,
        TuiInputNumberModule,
        TuiObscured,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './swap.component.html',
    styleUrl: './swap.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapComponent {
    protected cryptoService = inject(CryptoService);
    protected info$ = this.cryptoService.getTokens();
    protected price = computed(() =>
        this.getPrice(this.info$()?.data, this.chosen()[0], this.from()),
    );

    protected swapService = inject(SwapService).swapData;

    protected from = signal('0');
    protected to = signal('0');
    protected chosen = signal(['eth', 'btc']);
    protected openedDialog = [false, false];
    protected val = 0;

    protected newToken(index: number, title: string): void {
        this.chosen()[index] = title;
        this.openedDialog[index] = false;
    }

    protected getPrice(
        data: PricesData[] | undefined,
        title: string,
        value: string,
    ): number {
        if (data === undefined) {
            return 0;
        }

        for (const token of data) {
            if (token && token.symbol.toLowerCase() === title.toLowerCase()) {
                return Number((Number(token.priceUsd) * Number(value)).toFixed(2));
            }
        }

        return Number(value);
    }

    protected newSwap(data: PricesData[], current: number): void {
        const opposite = Number(!current);
        const curPrice = Number(this.getPrice(data, this.chosen()[current], '1'));
        let priceOpposite = 1;

        for (const token of data) {
            if (
                token &&
                token.symbol.toLowerCase() === this.chosen()[opposite].toLowerCase()
            ) {
                priceOpposite = Number(token.priceUsd);
                break;
            }
        }

        const result = curPrice / priceOpposite;

        // this.swapForm.controls[opposite].setValue(result);
        this.to.set(result.toString());
    }
}
