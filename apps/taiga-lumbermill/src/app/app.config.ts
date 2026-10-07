import {provideHttpClient, withXhr} from '@angular/common/http';
import type {ApplicationConfig} from '@angular/core';
import {provideZoneChangeDetection} from '@angular/core';
import {
    provideClientHydration,
    withNoIncrementalHydration,
} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(withNoIncrementalHydration()),
        provideAnimations(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(appRoutes),
        provideHttpClient(withXhr()),
        provideEventPlugins(),
    ],
};
