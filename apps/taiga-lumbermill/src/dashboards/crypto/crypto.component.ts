import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {SwapComponent} from './components/swap/swap.component';
import {PricesComponent} from './components/prices/prices.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, PricesComponent, SwapComponent],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
