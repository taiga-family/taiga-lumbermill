import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, TuiIcon],
    templateUrl: './crypto.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
