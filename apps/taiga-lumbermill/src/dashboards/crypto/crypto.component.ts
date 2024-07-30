import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {PoolsComponent} from './components/pools/pools.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, PoolsComponent],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
