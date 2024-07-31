import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {NFTComponent} from './components/nft/nft.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, NFTComponent],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
