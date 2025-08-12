import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { HomePlatformsComponent } from './components/home-platforms/home-platforms.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HomePlatformsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
