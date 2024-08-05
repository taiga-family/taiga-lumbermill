import {Injectable} from '@angular/core';

interface DashboardsData {
    readonly title: string;
    readonly link: string;
    readonly description: string;
}

const INITIAL_DATA: DashboardsData[] = [
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

@Injectable({
    providedIn: 'root',
})
export class DashboardsListService {
    public readonly dashboardsListData = INITIAL_DATA;
}
