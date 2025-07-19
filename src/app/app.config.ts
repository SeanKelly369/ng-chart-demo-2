import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ChartDataEffects } from './store/chart-data/chart-data.effects';
import { chartDataReducer } from './store/chart-data/chart-data.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideStore({ chartData: chartDataReducer }),
    provideEffects([ChartDataEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
