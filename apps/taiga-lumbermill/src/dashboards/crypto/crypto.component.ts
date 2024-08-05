import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule],
    templateUrl: './crypto.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
