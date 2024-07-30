import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiAppearance,
    TuiAutoColorPipe,
    TuiIcon,
    TuiScrollable,
    TuiScrollbar,
    TuiSurface,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiFade,
    TuiTab,
    TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

import {ContactsService} from './contacts.service';

@Component({
    standalone: true,
    selector: 'lmb-contacts',
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        CommonModule,
        TuiAppearance,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiCardLarge,
        TuiCell,
        TuiFade,
        TuiIcon,
        TuiScrollable,
        TuiScrollbar,
        TuiSurface,
        TuiTab,
        TuiTabs,
    ],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
    protected contactsService = inject(ContactsService).contactsData;
    protected tabs = ['Contacts', 'Recent'];
    protected activeTab = 0;

    protected updateFades(value: number): void {
        this.activeTab = value;
    }
}
