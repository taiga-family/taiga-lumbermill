import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

import {NftItemComponent} from './nft-item/nft-item.component';
import {NftListComponent} from './nft-list/nft-list.component';

@Component({
    standalone: true,
    selector: 'lmb-nft',
    imports: [
        CommonModule,
        NftItemComponent,
        NftListComponent,
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiTitle,
    ],
    templateUrl: './nft.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NFTComponent {
    protected activeItem = '';
}
