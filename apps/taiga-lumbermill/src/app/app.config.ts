import {provideHttpClient, withXhr} from '@angular/common/http';
import type {ApplicationConfig} from '@angular/core';
import {provideZoneChangeDetection} from '@angular/core';
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
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(appRoutes),
        provideHttpClient(withXhr()),
        provideTaiga(),
    ],
};
