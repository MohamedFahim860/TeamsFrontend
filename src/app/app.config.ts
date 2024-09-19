import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: 
  [
      provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
      provideHttpClient(withInterceptors([jwtInterceptor])), provideAnimationsAsync(), provideAnimationsAsync() // Register the interceptor 
  ]
  

};
