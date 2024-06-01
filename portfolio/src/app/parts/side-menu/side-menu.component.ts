import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  constructor(private router: Router) { }

  navigateToAbout(): void {
    this.router.navigateByUrl('/about');
  }
  navigateToSkills(): void {
    this.router.navigateByUrl('/skills');
  }
  navigateToEducation(): void {
    this.router.navigateByUrl('/education');
  }
  navigateToPortfolio(): void {
    this.router.navigateByUrl('/portfolio');
  }
  navigateToInterests(): void {
    this.router.navigateByUrl('/interests');
  }
  navigateToContact(): void {
    this.router.navigateByUrl('/contact');
  }
  downloadResume(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/Resume Elias Linderos (EN).pdf');
    link.setAttribute('download', '/Resume Elias Linderos (EN).pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
