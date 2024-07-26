import type {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboards',
        loadComponent: async () =>
            import('../../dashboards/crypto/crypto.component').then(
                (mod) => mod.CryptoComponent,
            ),
    },
    {path: '**', redirectTo: 'dashboards'},
];
