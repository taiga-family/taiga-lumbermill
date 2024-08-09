import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

interface DashboardsData {
    readonly title: string;
    readonly link: string;
    readonly description: string;
}

export const INITIAL_DATA: DashboardsData[] = [
    {
        title: 'Iot Dashboard',
        link: '/dashboards/iot',
        description: 'Smart home dashboard',
    },
    {
        title: 'Crypto Dashboard',
        link: '/dashboards/crypto',
        description: 'Crypto token dashboard',
    },
];

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
    protected dashboardsListData = INITIAL_DATA;
}
