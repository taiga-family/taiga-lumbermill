import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

import {NftService} from './nft.service';

@Component({
    standalone: true,
    selector: 'lmb-nft',
    imports: [
        CommonModule,
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiTitle,
    ],
    templateUrl: './nft.component.html',
    styleUrl: './nft.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NFTComponent {
    protected nftService = inject(NftService).nftData;
}
