import {provideHttpClient, withXhr} from '@angular/common/http';
import {type ApplicationConfig, provideZonelessChangeDetection} from '@angular/core';
import {
    provideClientHydration,
    withNoIncrementalHydration,
} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {provideTaiga} from '@taiga-ui/core';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(withNoIncrementalHydration()),
        provideZonelessChangeDetection(),
        provideRouter(appRoutes),
        provideHttpClient(withXhr()),
        provideTaiga(),
    ],
};
