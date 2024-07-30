import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {SwapComponent} from './components/swap/swap.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, SwapComponent],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
