import { Component } from '@angular/core';
import { HomeBtnBlueComponent } from './home-btn-blue/home-btn-blue.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeBtnBlueComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
