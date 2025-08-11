import { Component, signal } from '@angular/core';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('client');
}
