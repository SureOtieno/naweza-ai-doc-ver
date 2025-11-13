import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import {provideAnimations} from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
  ]
}).catch((err) => console.error(err));
