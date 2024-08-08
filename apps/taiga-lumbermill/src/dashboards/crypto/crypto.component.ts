import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {PricesComponent} from './components/prices/prices.component';
import {StakingComponent} from './components/staking/staking.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, PricesComponent, StakingComponent],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
