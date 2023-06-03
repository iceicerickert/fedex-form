/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
// import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



// todo remove if not using protractor
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent,
//     {providers: [provideProtractorTestingSupport()]})
//   .catch(err => console.error(err));
