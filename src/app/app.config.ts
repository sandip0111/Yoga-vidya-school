import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { DatePipe } from "@angular/common";
import { corsInterceptor  } from './cors.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideClientHydration(),provideAnimations(),provideHttpClient(withFetch(),withInterceptors([corsInterceptor ])),provideToastr({timeOut: 10000,positionClass: 'toast-top-right',preventDuplicates: true,}),DatePipe]
};
