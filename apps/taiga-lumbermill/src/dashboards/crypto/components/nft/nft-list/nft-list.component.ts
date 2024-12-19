import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiScrollbar, TuiSurface} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

import type {NFT} from '../nft.service';
import {NftService} from '../nft.service';

@Component({
    standalone: true,
    selector: 'lmb-nft-list',
    imports: [
        CommonModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiCardLarge,
        TuiScrollbar,
        TuiSurface,
    ],
    templateUrl: './nft-list.component.html',
    styleUrl: './nft-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftListComponent {
    protected readonly nfts = inject(NftService).nfts;

    @Output()
    public readonly nftChange = new EventEmitter<NFT | null>();

    protected updateItem(value: number): void {
        this.nftChange.emit(this.nfts[value]);
    }
}
