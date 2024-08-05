import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

import {DashboardsService} from './dashboards.service';

@Component({
    standalone: true,
    selector: 'lmb-dashboards',
    imports: [
        CommonModule,
        RouterLink,
        RouterOutlet,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiIcon,
        TuiNavigation,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './dashboards.component.html',
    styleUrl: './dashboards.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardsComponent {
    protected dashboardsService = inject(DashboardsService).dashboardsData;
}
