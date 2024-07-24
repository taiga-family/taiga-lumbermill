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
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiFade,
    TuiTab,
    TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

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
        TuiFade,
        TuiIcon,
        TuiScrollable,
        TuiScrollbar,
        TuiTab,
        TuiTabs,
    ],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
    protected contactsService = inject(ContactsService).contactsData;
    protected contacts = true;

    protected updateFades(value: boolean): void {
        this.contacts = value;
    }
}
