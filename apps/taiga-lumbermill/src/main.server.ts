import type {ApplicationRef} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {config} from './components/app/app.config.server';

const bootstrap = async (): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, config);

export default bootstrap;
