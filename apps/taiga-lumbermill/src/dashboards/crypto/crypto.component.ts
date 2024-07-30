import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {MinterComponent} from './components/minter/minter.component';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, MinterComponent],
    templateUrl: './crypto.component.html',
    styleUrl: './crypto.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
