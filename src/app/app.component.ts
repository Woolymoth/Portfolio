import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive, } from '@angular/router';
import { SideMenuComponent } from './parts/side-menu/side-menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideMenuComponent,
    RouterLinkActive,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  
}
