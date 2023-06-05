import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserFormModule } from './user-form/user-form.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

import { ShouldNotContainValidatorDirective } from './shared/shoud-not-contain.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    UserFormModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics())
  ],
  declarations: [
    AppComponent,
    UserFormComponent,
    ShouldNotContainValidatorDirective,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
