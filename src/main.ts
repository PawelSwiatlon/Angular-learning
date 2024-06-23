import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { provideQueryClientOptions } from '@ngneat/query';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withComponentInputBinding(),
    ),
    provideHotToastConfig({ position: 'bottom-center' }),
    { provide: LOCALE_ID, useValue: 'pl' },
    provideQueryClientOptions({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false, retry: false },
        mutations: { retry: false },
      },
    }),
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
}).catch((err) => console.error(err));
