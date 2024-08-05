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
import type {TuiComparator} from '@taiga-ui/addon-table';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiDay, tuiToInt} from '@taiga-ui/cdk';
import {TuiAppearance, TuiScrollbar, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

import type {NFTData} from '../nft.service';
import {NftService} from '../nft.service';

interface User {
    readonly dob: TuiDay;
    readonly name: string;
}

const TODAY = TuiDay.currentLocal();
const FIRST = [
    'John',
    'Jane',
    'Jack',
    'Jill',
    'James',
    'Joan',
    'Jim',
    'Julia',
    'Joe',
    'Julia',
];

const LAST = [
    'Smith',
    'West',
    'Brown',
    'Jones',
    'Davis',
    'Miller',
    'Johnson',
    'Jackson',
    'Williams',
    'Wilson',
];

const DATA: readonly User[] = Array.from({length: 300}, () => ({
    name: `${LAST[Math.floor(Math.random() * 10)]}, ${
        FIRST[Math.floor(Math.random() * 10)]
    }`,
    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),
}));

function getAge({dob}: User): number {
    const years = TODAY.year - dob.year;
    const months = TODAY.month - dob.month;
    const days = TODAY.day - dob.day;
    const offset = tuiToInt(months > 0 || (!months && days > 9));

    return years + offset;
}

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
    protected nftService = inject(NftService).nftData;

    protected readonly data = DATA;

    protected readonly columns = ['name', 'dob', 'age'];

    protected readonly getAge = getAge;

    @Input()
    public activeItem = '';

    @Output()
    public readonly activeItemChange = new EventEmitter<string>();

    protected readonly ageSorter: TuiComparator<User> = (a: User, b: User) =>
        getAge(a) - getAge(b);

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
