import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiAppearance,
    TuiAutoColorPipe,
    TuiButton,
    TuiIcon,
    TuiScrollable,
    TuiScrollbar,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiTab, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

import {ContactsService} from './contacts.service';

@Component({
    standalone: true,
    selector: 'lmb-contacts',
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        TuiAppearance,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiIcon,
        TuiScrollable,
        TuiScrollbar,
        TuiTab,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
    protected contactsService = inject(ContactsService).contactsData;
    protected tabs = ['Contacts', 'Recent'];
    protected activeTab = 0;
}
