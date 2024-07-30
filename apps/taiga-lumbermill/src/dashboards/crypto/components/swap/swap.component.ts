import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    protected info$ = this.cryptoService.info$;
    protected swapService = inject(SwapService).swapData;
    protected swapForm = new FormArray([new FormControl(0.22), new FormControl(0.22)]);
    protected val = 0;

    protected openInfo(index: number): void {
        this.swapService[index].status = !this.swapService[index].status;
    }

    protected newToken(index: number, title: string): void {
        this.swapService[index].chosen = title;
    }

    protected getPrice(data: PricesData[], title: string, value: number | null): string {
        if (value === null) {
            return '0';
        }

        for (const token of data) {
            if (token && token.symbol.toLowerCase() === title.toLowerCase()) {
                return (Number(token.priceUsd) * value).toFixed(2);
            }
        }

        return value.toFixed(2);
    }

    protected newSwap(data: PricesData[], current: number): void {
        const opposite = Number(!current);
        const curPrice = Number(
            this.getPrice(
                data,
                this.swapService[current].chosen,
                this.swapForm.controls[current].value,
            ),
        );
        let priceOpposite = 1;

        for (const token of data) {
            if (
                token &&
                token.symbol.toLowerCase() ===
                    this.swapService[opposite].chosen.toLowerCase()
            ) {
                priceOpposite = Number(token.priceUsd);
                break;
            }
        }

        const result = curPrice / priceOpposite;

        this.swapForm.controls[opposite].setValue(result);
    }
}
