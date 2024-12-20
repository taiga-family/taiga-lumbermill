import type {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboards',
        loadComponent: async () =>
            import('../components/list/list.component').then((mod) => mod.ListComponent),
    },
    {
        path: 'dashboards/iot',
        loadComponent: async () =>
            import('../dashboards/iot/iot.component').then((mod) => mod.IotComponent),
        data: {title: 'Iot'},
    },
    {
        path: 'dashboards/crypto',
        loadComponent: async () =>
            import('../dashboards/crypto/crypto.component').then(
                (mod) => mod.CryptoComponent,
            ),
        data: {title: 'Crypto'},
    },
    {
        path: 'pages',
        loadComponent: async () =>
            import('../components/list/list.component').then((mod) => mod.ListComponent),
    },
    {
        path: 'pages/login',
        loadComponent: async () =>
            import('../features/login/login.component').then((mod) => mod.LoginComponent),
    },
    {
        path: 'pages/sign-up',
        loadComponent: async () =>
            import('../features/sign-up/sign-up.component').then(
                (mod) => mod.SignUpComponent,
            ),
    },
    {
        path: 'color-generator',
        loadComponent: async () =>
            import('../features/theme-generator/theme-generator.component').then(
                (mod) => mod.ThemeGeneratorComponent,
            ),
    },
    {
        path: '',
        loadComponent: async () =>
            import('../components/common-page/common-page.component').then(
                (mod) => mod.CommonPageComponent,
            ),
    },
    {path: '**', redirectTo: 'dashboards'},
];
