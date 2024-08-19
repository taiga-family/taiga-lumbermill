import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {MinterCreatedComponent} from './minter-created/minter-created.component';
import {MinterDeployComponent} from './minter-deploy/minter-deploy.component';

export interface Token {
    urlIcon: string;
    token: string;
    amount: number;
    symbol: string;
}

@Component({
    standalone: true,
    selector: 'lmb-minter',
    imports: [
        CommonModule,
        MinterCreatedComponent,
        MinterDeployComponent,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiTitle,
    ],
    templateUrl: './minter.component.html',
    styleUrl: './minter.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinterComponent {
    protected token: Token | null = null;
}
