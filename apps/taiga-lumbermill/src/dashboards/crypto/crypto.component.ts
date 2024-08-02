import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiIcon} from '@taiga-ui/core';
import {TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-crypto',
    imports: [CommonModule, RouterLink, TuiIcon, TuiNavigation],
    templateUrl: './crypto.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoComponent {}
