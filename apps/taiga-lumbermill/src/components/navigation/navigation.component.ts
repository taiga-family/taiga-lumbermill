import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiBreakpointService,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiExpand,
    TuiIcon,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiChevron,
    TuiFade,
    TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';
import {map} from 'rxjs';

import {IotComponent} from '../../dashboards/iot/iot.component';

@Component({
    standalone: true,
    selector: 'app-navigation',
    imports: [
        RouterModule,
        CommonModule,
        TuiNavigation,
        TuiButton,
        TuiIcon,
        TuiChevron,
        TuiDropdown,
        TuiFade,
        TuiDataList,
        TuiBadgeNotification,
        TuiAvatar,
        RouterLink,
        RouterLinkActive,
        TuiAppearance,
        TuiExpand,
        TuiBadge,
        TuiTabs,
        TuiRepeatTimes,
        TuiCardLarge,
        TuiHeader,
        TuiSurface,
        TuiTitle,
        IotComponent,
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
    protected readonly mobile$ = inject(TuiBreakpointService).pipe(
        map((key) => key === 'mobile'),
    );

    protected open = false;
    protected expanded = false;
    protected submenu = false;
}
