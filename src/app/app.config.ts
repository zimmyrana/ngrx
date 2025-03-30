import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { groceryReducer } from './store/reducers/grocery.reducer';
import { bucketReducer } from './store/reducers/bucket.reducer';
import { GroceryEffects } from './store/effects/grocery.effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      groceries:groceryReducer,
      myBucket:bucketReducer
    }),
    provideEffects(GroceryEffects),
    provideStoreDevtools({
      maxAge: 25, //retains the last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace:false, // trace actions with stack trace
      traceLimit: 25, // limit of stack trace frames to be collected
      connectInZone: true, // Whether the extension should be connected in Angular's zone or not
      // features: {
      //   pause: false,
      //   lock: true,
      //   persist: true
      // }
    })
  ]
};
