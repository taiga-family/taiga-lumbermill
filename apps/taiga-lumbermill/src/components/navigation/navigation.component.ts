import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiExpand,
    TuiIcon,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiNavigation} from '@taiga-ui/experimental';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiChevron,
    TuiFade,
    TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'app-navigation',
    imports: [
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
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
    protected open = false;
    protected expanded = false;
    protected submenu = false;
}
