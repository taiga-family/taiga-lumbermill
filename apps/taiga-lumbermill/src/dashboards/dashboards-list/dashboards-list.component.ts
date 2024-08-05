import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

import {DashboardsListService} from '../dashboards-list/dashboards-list.service';

@Component({
    standalone: true,
    selector: 'lmb-dashboards-list',
    imports: [
        CommonModule,
        RouterLink,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiIcon,
        TuiNavigation,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './dashboards-list.component.html',
    styleUrl: './dashboards-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardsListComponent {
    protected dashboardsService = inject(DashboardsListService).dashboardsListData;
}
