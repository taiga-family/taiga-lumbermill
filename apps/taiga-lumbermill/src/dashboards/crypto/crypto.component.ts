import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiIcon} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiLogoComponent, TuiNavigation} from '@taiga-ui/layout';

import {MinterComponent} from './components/minter/minter.component';
import {NFTComponent} from './components/nft/nft.component';
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
        NFTComponent,
        PoolsComponent,
        PricesComponent,
        RouterLink,
        StakingComponent,
        SwapComponent,
        TuiFade,
        TuiIcon,
        TuiLogoComponent,
        TuiNavigation,
    ],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
