import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication (essentially like the 'main' function in other programming lanaguages)
// 1. Loads your root component (usually AppComponent)
// 2. Sets up all the services and features your app needs
// 3. Starts rendering your app in the browser