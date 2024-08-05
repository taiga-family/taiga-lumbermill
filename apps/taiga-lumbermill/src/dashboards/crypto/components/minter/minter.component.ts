import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDialog,
    TuiHint,
    TuiIcon,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';

import {MinterCreatedComponent} from './minter-created/minter-created.component';
import {MinterDeployComponent} from './minter-deploy/minter-deploy.component';

@Component({
    standalone: true,
    selector: 'lmb-minter',
    imports: [
        CommonModule,
        FormsModule,
        MinterCreatedComponent,
        MinterDeployComponent,
        ReactiveFormsModule,
        TuiAppearance,
        TuiAutoFocus,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiDialog,
        TuiHeader,
        TuiHint,
        TuiIcon,
        TuiInputModule,
        TuiInputNumberModule,
        TuiTitle,
    ],
    templateUrl: './minter.component.html',
    styleUrl: './minter.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinterComponent {
    protected success = false;
    protected urlIcon = '';
    protected token = '';
    protected amount = 0;
    protected symbol = '';
}
