import type {Route} from '@angular/router';

import {IotComponent} from '../../dashboards/iot/iot.component';

export const appRoutes: Route[] = [
    {path: 'dashboards', component: IotComponent},
    {path: '**', redirectTo: 'dashboards'},
];
