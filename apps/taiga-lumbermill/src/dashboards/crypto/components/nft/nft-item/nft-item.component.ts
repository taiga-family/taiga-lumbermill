import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {CommonModule, DatePipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    input,
    Output,
} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiAppearance, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

import type {NFTData} from '../nft.service';
import {NftService} from '../nft.service';

@Component({
    standalone: true,
    selector: 'lmb-nft-item',
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        CommonModule,
        DatePipe,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiHeader,
        TuiScrollbar,
        TuiTable,
        TuiTitle,
    ],
    templateUrl: './nft-item.component.html',
    styleUrl: './nft-item.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftItemComponent {
    protected readonly nftService = inject(NftService);

    protected readonly columns = ['type', 'priceUsd', 'from', 'to', 'time'];

    @Output()
    public readonly nftChange = new EventEmitter<NFTData | null>();

    public nft = input.required<NFTData | null>();

    protected goBack(): void {
        this.nftChange.emit(null);
    }
}
