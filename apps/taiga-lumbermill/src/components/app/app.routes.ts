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
                path: '',
                loadComponent: async () =>
                    import(
                        '../../dashboards/dashboards-list/dashboards-list.component'
                    ).then((mod) => mod.DashboardsListComponent),
                data: {title: ''},
            },
            {
                path: 'iot',
                loadComponent: async () =>
                    import('../../dashboards/iot/iot.component').then(
                        (mod) => mod.IotComponent,
                    ),
                data: {title: 'Iot'},
            },
            {
                path: 'crypto',
                loadComponent: async () =>
                    import('../../dashboards/crypto/crypto.component').then(
                        (mod) => mod.CryptoComponent,
                    ),
                data: {title: 'Crypto'},
            },
            {
                path: 'space-zoo',
                loadComponent: async () =>
                    import('../../dashboards/space-zoo/space-zoo.component').then(
                        (mod) => mod.SpaceZooComponent,
                    ),
                data: {title: 'Space zoo'},
            },
        ],
    },
    {
        path: 'theme',
        loadComponent: async () =>
            import('../../dashboards/theme-generator/theme-generator.component').then(
                (mod) => mod.ThemeGeneratorComponent,
            ),
    },
    {
        path: '',
        loadComponent: async () =>
            import('../../dashboards/common-page/common-page.component').then(
                (mod) => mod.CommonPageComponent,
            ),
    },
    {path: '**', redirectTo: 'dashboards'},
];
