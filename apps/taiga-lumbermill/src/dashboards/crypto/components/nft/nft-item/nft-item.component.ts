import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiAppearance, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
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
        TuiAppearance,
        TuiAvatar,
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

    protected readonly columns = ['type', 'priceUsd', 'from', 'to', 'time'];

    @Input()
    public activeItem = '';

    @Output()
    public readonly activeItemChange = new EventEmitter<string>();

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
