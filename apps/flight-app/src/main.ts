import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import { initExternals } from './app/externals-utils';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

initExternals(environment.production);

platformBrowserDynamic().bootstrapModule(AppModule);
