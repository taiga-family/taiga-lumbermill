import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

import type {NFTData} from '../nft.service';
import {NftService} from '../nft.service';

@Component({
    standalone: true,
    selector: 'lmb-nft-list',
    imports: [
        CommonModule,
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiTitle,
    ],
    templateUrl: './nft-list.component.html',
    styleUrl: './nft-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftListComponent {
    protected nftService = inject(NftService).nftData;

    @Output()
    public readonly activeItemChange = new EventEmitter<string>();

    protected updateItem(value: string): void {
        this.activeItemChange.emit(value);
    }

    protected getInfo(activeItem: string): NFTData {
        for (const nft of this.nftService) {
            if (nft.name === activeItem) {
                return nft;
            }
        }

        return this.nftService[0];
    }
}