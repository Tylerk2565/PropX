import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-primary-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './primary-nav.component.html',
})
export class PrimaryNavComponent {

}
