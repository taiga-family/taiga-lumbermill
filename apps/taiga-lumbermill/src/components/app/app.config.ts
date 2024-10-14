import {provideHttpClient} from '@angular/common/http';
import type {ApplicationConfig} from '@angular/core';
import {provideZoneChangeDetection} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {appRoutes} from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(appRoutes),
        provideHttpClient(),
        NG_EVENT_PLUGINS,
        provideClientHydration(),
    ],
};
