import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hire-developer',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './hire-developer.component.html',
  styleUrls: ['./hire-developer.component.scss']
})
export class HireDeveloperComponent implements OnInit {
  developers: any[] = []; 
  selectedDeveloper?: any;
  hireForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.hireForm = this.fb.group({
      developerId: ['', [Validators.required]],
      projectId: ['', [Validators.required]],
      paymentRate: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.developers = [
      { id: 1, name: 'John Doe', portfolio: 'https://example.com/portfolio/johndoe', yearsExperience: 5 },
      { id: 2, name: 'Jane Smith', portfolio: 'https://example.com/portfolio/janesmith', yearsExperience: 7 }
    ];
  }

  onSelectDeveloper(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const developerId = target.value;
    this.selectedDeveloper = this.developers.find(dev => dev.id === +developerId);
  }

  onSubmit(): void {
    if (this.hireForm.valid) {
      const formValues = this.hireForm.value;
      console.log('Contratación exitosa:', formValues);
      // Aquí iría la lógica para realizar la contratación del desarrollador
    }
  }
  goBack() {
    this.router.navigate(['/']); // Redirige a la página principal
  }
}
