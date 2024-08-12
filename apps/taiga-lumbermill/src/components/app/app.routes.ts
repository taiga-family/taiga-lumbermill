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
                path: 'films',
                loadComponent: async () =>
                    import('../../dashboards/films/films.component').then(
                        (mod) => mod.FilmComponent,
                    ),
                data: {title: 'Films'},
                children: [
                    {
                        path: '',
                        loadComponent: async () =>
                            import(
                                '../../dashboards/films/components/list-films/list-films.component'
                            ).then((mod) => mod.ListFilmsComponent),
                        data: {title: 'Films'},
                    },
                    {
                        path: ':id',
                        loadComponent: async () =>
                            import(
                                '../../dashboards/films/components/film-view/film-view.component'
                            ).then((mod) => mod.default),
                        data: {title: 'Films'},
                    },
                ],
            },
        ],
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
