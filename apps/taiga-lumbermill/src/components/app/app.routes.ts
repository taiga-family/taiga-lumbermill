import type {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'dashboards',
        loadComponent: async () =>
            import('../../dashboards/iot/iot.component').then((mod) => mod.IotComponent),
    },
    {path: '**', redirectTo: 'dashboards'},
];
