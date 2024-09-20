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
                        '../../components/dashboards-list/dashboards-list.component'
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
        ],
    },
    {
        path: 'theme',
        loadComponent: async () =>
            import('../../features/theme-generator/theme-generator.component').then(
                (mod) => mod.ThemeGeneratorComponent,
            ),
    },
    {
        path: '',
        loadComponent: async () =>
            import('../../components/common-page/common-page.component').then(
                (mod) => mod.CommonPageComponent,
            ),
    },
    {
        path: 'login',
        loadComponent: async () =>
            import('../../features/login/login.component').then(
                (mod) => mod.LoginComponent,
            ),
    },
    {
        path: 'sign-up',
        loadComponent: async () =>
            import('../../features/sign-up/sign-up.component').then(
                (mod) => mod.SignUpComponent,
            ),
    },
    {path: '**', redirectTo: 'dashboards'},
];
