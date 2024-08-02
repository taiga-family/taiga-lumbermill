import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
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
import {ThemeService} from '../../services/theme.service';

@Component({
    standalone: true,
    selector: 'app-navigation',
    imports: [
        CommonModule,
        IotComponent,
        RouterLink,
        RouterLinkActive,
        RouterModule,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiBadgeNotification,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiExpand,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSurface,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
    protected readonly router = Router;
    protected themeService = inject(ThemeService);
    protected readonly mobile$ = inject(TuiBreakpointService).pipe(
        map((key) => key === 'mobile'),
    );

    protected open = false;
    protected expanded = false;
    protected submenu = false;
    protected openTheme = false;

    public chooseTheme(theme: string): void {
        this.themeService.theme = theme;
        this.openTheme = false;
    }
}
