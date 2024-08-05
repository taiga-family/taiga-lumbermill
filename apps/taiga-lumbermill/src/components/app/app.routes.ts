import type {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboards',
        loadComponent: async () =>
            import('../../dashboards/dashboards/dashboards.component').then(
                (mod) => mod.DashboardsComponent,
            ),
        children: [
            {
                path: 'iot',
                loadComponent: async () =>
                    import('../../dashboards/iot/iot.component').then(
                        (mod) => mod.IotComponent,
                    ),
            },
            {
                path: 'crypto',
                loadComponent: async () =>
                    import('../../dashboards/crypto/crypto.component').then(
                        (mod) => mod.CryptoComponent,
                    ),
            },
        ],
    },
    {path: '**', redirectTo: 'dashboards'},
];
