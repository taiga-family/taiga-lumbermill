import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {StakingComponent} from './components/staking/staking.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, StakingComponent],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
