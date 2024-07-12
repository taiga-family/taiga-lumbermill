import type {Route} from '@angular/router';

import {AppComponent} from './app.component';

export const appRoutes: Route[] = [
    {path: 'dashboards', component: AppComponent},
    {path: '**', redirectTo: 'dashboards'},
];
