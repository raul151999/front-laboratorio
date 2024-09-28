import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgots',
  standalone:true,
  imports: [NgIf,NgFor,FormsModule,RouterModule],
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  email: string = '';

  constructor(private router: Router) {}

  resetPassword() {

    console.log('Correo para restablecimiento:', this.email);

    alert('Se ha enviado un enlace de restablecimiento a tu correo electrónico.');

    this.router.navigate(['/login']);
  }
}
