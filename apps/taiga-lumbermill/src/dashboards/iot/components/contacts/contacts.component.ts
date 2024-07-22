import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiAvatar, TuiFade, TuiTab, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

import {ContactsService} from './contacts.service';

@Component({
    standalone: true,
    selector: 'lmb-contacts',
    imports: [
        CommonModule,
        TuiTitle,
        TuiHeader,
        TuiCardLarge,
        TuiAppearance,
        TuiAvatar,
        TuiIcon,
        TuiTabs,
        TuiTab,
        TuiFade,
    ],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
    protected contactsService = inject(ContactsService);
}
