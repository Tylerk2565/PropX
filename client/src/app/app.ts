import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryNavComponent } from './layouts/primary-nav/primary-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimaryNavComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PropX');
}

// changeDetection: ChangeDetectionStrategy.OnPush