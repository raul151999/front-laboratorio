import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-proyecto',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent {
  proyectoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.proyectoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      presentacion: ['', Validators.required],
      estado: ['in-progress', Validators.required],
      revision: ['', Validators.required],
      categoria: ['', Validators.required],
      calificacion: ['1', Validators.required]
    });
  }
  goToHome() {
    this.router.navigate(['/profile-customer']); // Ajusta la ruta según sea necesario
  }

  onSubmit() {
    if (this.proyectoForm.valid) {
      console.log('Proyecto creado:', this.proyectoForm.value);
      alert('Proyecto creado con éxito');
      this.router.navigate(['/profile-customer']);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}