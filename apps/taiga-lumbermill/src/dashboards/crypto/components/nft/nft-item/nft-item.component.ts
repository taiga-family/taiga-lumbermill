import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    inject,
    input,
    Output,
} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiAppearance, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

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
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiCardLarge,
        TuiCardMedium,
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
    protected nftService = inject(NftService);
    protected information = computed(() => this.getInfo(this.activeItem()));

    protected readonly columns = ['type', 'priceUsd', 'from', 'to', 'time'];

    @Output()
    public readonly activeItemChange = new EventEmitter<string>();

    public activeItem = input.required<string>();

    protected toDate(value: number): TuiDay {
        const date = new Date(value);

        return TuiDay.fromLocalNativeDate(date);
    }

    protected updateItem(value: string): void {
        this.activeItemChange.emit(value);
    }

    protected getInfo(activeItem: string): NFTData {
        for (const nft of this.nftService.nftData) {
            if (nft.name === activeItem) {
                return nft;
            }
        }

        return this.nftService.nftData[0];
    }
}
