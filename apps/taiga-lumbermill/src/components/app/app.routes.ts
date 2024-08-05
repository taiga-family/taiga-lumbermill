import type {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboards',
        loadComponent: async () =>
            import('../../dashboards/dashboards/dashboards.component').then(
                (mod) => mod.DashboardsComponent,
            ),
        data: {key: '22'},
        children: [
            {
                path: '',
                loadComponent: async () =>
                    import(
                        '../../dashboards/dashboards-list/dashboards-list.component'
                    ).then((mod) => mod.DashboardsListComponent),
                data: {key: ''},
            },
            {
                path: 'iot',
                loadComponent: async () =>
                    import('../../dashboards/iot/iot.component').then(
                        (mod) => mod.IotComponent,
                    ),
                data: {key: 'Iot'},
            },
            {
                path: 'crypto',
                loadComponent: async () =>
                    import('../../dashboards/crypto/crypto.component').then(
                        (mod) => mod.CryptoComponent,
                    ),
                data: {key: 'Crypto'},
            },
        ],
    },
    {path: '**', redirectTo: 'dashboards'},
];
