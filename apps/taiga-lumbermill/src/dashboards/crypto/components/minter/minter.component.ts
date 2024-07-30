import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'lmb-minter',
    imports: [
        CommonModule,
        FormsModule,
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiIcon,
        TuiInputModule,
        TuiTitle,
    ],
    templateUrl: './minter.component.html',
    styleUrl: './minter.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinterComponent {
    protected token = '';
    protected symbol = '';
}
