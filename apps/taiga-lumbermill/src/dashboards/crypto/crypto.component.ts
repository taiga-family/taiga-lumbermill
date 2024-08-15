import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {MinterComponent} from './components/minter/minter.component';
import {PoolsComponent} from './components/pools/pools.component';
import {PricesComponent} from './components/prices/prices.component';
import {StakingComponent} from './components/staking/staking.component';
import {SwapComponent} from './components/swap/swap.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [
        CommonModule,
        MinterComponent,
        PoolsComponent,
        PricesComponent,
        StakingComponent,
        SwapComponent,
    ],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
