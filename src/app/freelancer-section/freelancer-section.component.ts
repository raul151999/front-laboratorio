import { Component } from '@angular/core';
import { NgFor,NgIf,NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-freelancer-sectiont',
  standalone:true,
  imports: [NgIf,NgFor,NgClass,FormsModule],
  templateUrl: './freelancer-section.component.html',
  styleUrls: ['./freelancer-section.component.scss'] // Asegúrate de que sea 'styleUrls', no 'styleUrl'
})
export class FreelancerSectionComponent {
  // Lista de freelancers
  freelancers = [
    {
      name: 'Nombres y Apellidos',
      description: 'Pequeña descripción',
      rating: 5.0,
      reviews: 10,
      hourlyRate: 50,
      imageUrl: 'assets/profile-placeholder.png'
    },
    {
      name: 'Nombres y Apellidos',
      description: 'Pequeña descripción',
      rating: 5.0,
      reviews: 10,
      hourlyRate: 50,
      imageUrl: 'assets/profile-placeholder.png'
    }
  ];

  // Método para manejar el filtrado (ejemplo simple)
  filterFreelancers() {
    alert('Filtrar freelancers');
  }

  // Método para ver el perfil del freelancer
  viewProfile(freelancer: any) {
    alert(`Ver perfil de: ${freelancer.name}`);
  }
}
