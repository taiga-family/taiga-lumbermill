import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAppearance, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

import type {NFTData} from '../nft.service';
import {NftService} from '../nft.service';

@Component({
    standalone: true,
    selector: 'lmb-nft-list',
    imports: [
        CommonModule,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiHeader,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './nft-list.component.html',
    styleUrl: './nft-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftListComponent {
    protected readonly nftService = inject(NftService).nftData;

    @Output()
    public readonly nftChange = new EventEmitter<NFTData | null>();

    protected updateItem(value: number): void {
        this.nftChange.emit(this.nftService[value]);
    }
}