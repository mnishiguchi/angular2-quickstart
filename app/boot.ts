// Two things that we need to launch the application:
// - Angular's browser bootstrap function
// - The application root component

import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);
