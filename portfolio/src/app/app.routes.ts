import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { EducationComponent } from './pages/education/education.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'interests', component: InterestsComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }