import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from 'environments/environment';

if (environment.production) {
  enableProdMode();
}
console.log(`ENVIRONMENT = ${environment.name}, PROD MODE = ${isDevMode() ? 'OFF' : 'ON'} `);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
