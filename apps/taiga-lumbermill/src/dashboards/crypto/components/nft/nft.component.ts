import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

import type {NFTData} from './nft.service';
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
    protected activeItem = '';

    protected getInfo(activeItem: string): NFTData {
        for (const nft of this.nftService) {
            if (nft.name === activeItem) {
                return nft;
            }
        }

        return this.nftService[0];
    }
}
