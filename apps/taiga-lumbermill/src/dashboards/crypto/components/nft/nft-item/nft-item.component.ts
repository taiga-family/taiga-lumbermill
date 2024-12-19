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
    input,
    Output,
} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiAutoColorPipe, TuiButton, TuiScrollbar} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

import type {NFT, Transaction} from '../nft.service';

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
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiHeader,
        TuiScrollbar,
        TuiTable,
    ],
    templateUrl: './nft-item.component.html',
    styleUrl: './nft-item.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftItemComponent {
    protected readonly columns: Array<keyof Transaction> = [
        'type',
        'priceUsd',
        'from',
        'to',
        'time',
    ];

    @Output()
    public readonly nftChange = new EventEmitter<NFT | null>();

    public nft = input.required<NFT | null>();

    protected goBack(): void {
        this.nftChange.emit(null);
    }
}
