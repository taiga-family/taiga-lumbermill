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
    protected info = toSignal(this.cryptoService.getTokens());
    protected priceFrom = computed(() => this.getPrice(this.info(), this.chosen()[0]));

    protected priceTo = computed(() => this.getPrice(this.info(), this.chosen()[1]));

    protected titles = ['From', 'To'];

    protected from = signal('0');
    protected to = signal('0');
    protected chosen = signal(['eth', 'btc']);
    protected openedDialog = [false, false];
    protected val = 0;

    protected newToken(index: number, title: string): void {
        this.chosen()[index] = title;
        this.openedDialog[index] = false;
    }

    protected toNum(val: string): number {
        return Number(val);
    }

    protected getPrice(data: PricesData[] | undefined, title: string): number {
        for (const token of data ?? []) {
            if (token && token.symbol.toLowerCase() === title.toLowerCase()) {
                return Number(token.priceUsd);
            }
        }

        return 0;
    }

    protected newSwapFrom(): void {
        this.to.set(
            ((this.priceFrom() * Number(this.from())) / this.priceTo()).toFixed(2),
        );
    }

    protected newSwapTo(): void {
        this.from.set(
            ((this.priceTo() * Number(this.to())) / this.priceFrom()).toFixed(2),
        );
    }
}
