import type {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboards/iot',
        loadComponent: async () =>
            import('../../dashboards/iot/iot.component').then((mod) => mod.IotComponent),
    },
    {
        path: 'dashboards/crypto',
        loadComponent: async () =>
            import('../../dashboards/crypto/crypto.component').then(
                (mod) => mod.CryptoComponent,
            ),
    },
    {path: '**', redirectTo: 'dashboards'},
];
