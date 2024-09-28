import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-project',
  standalone: true,
  imports: [],
  templateUrl: './modify-project.component.html',
  styleUrl: './modify-project.component.scss'
})
export class ModifyProjectComponent {
  @Input() project: any;
  
  constructor(private router: Router) {}

  saveModify() {
    console.log('Modificar:', this.project);
    this.router.navigate(['/view-project']);
  }

  cancelModify() {
    console.log('Cancelando el modificar:', this.project);
    this.router.navigate(['/view-project']);
  }
}