import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-nft',
    imports: [CommonModule, TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle],
    templateUrl: './nft.component.html',
    styleUrl: './nft.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NFTComponent {}
