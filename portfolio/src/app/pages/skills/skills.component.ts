import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'], // <-- Corrected property name
  animations: [
    trigger('fillAnimation', [
      state('void', style({
        width: '0%'
      })),
      transition(':enter', animate('0.8s ease-out'))
    ])
  ]
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'HTML', level: 60 },
    { name: 'CSS', level: 60 },
    { name: 'Figma', level: 60 },
    { name: 'Javascript', level: 50 },
    { name: 'Typescript', level: 45 },
    { name: 'Tailwind', level: 40 },
    { name: 'Node.js', level: 30 },
    { name: 'Angular', level: 25 },
    { name: 'React', level: 15 },
    { name: 'SQL', level: 15 },
  ];

  getSkillGroups(): Skill[][] {
    const skillGroups: Skill[][] = [];
    const groupSize = 7; // Number of skills per group

    for (let i = 0; i < this.skills.length; i += groupSize) {
      skillGroups.push(this.skills.slice(i, i + groupSize));
    }

    return skillGroups;
  }
}
