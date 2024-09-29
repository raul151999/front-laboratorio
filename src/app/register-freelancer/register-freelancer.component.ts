import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-freelancer',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, RouterModule],
  templateUrl: './register-freelancer.component.html',
  styleUrls: ['./register-freelancer.component.scss']
})
export class RegisterFreelancerComponent {
  freelancer = {
    firstName: '',
    lastName: '',
    email: '',
    portfolio: '',
    skills: '',
    experience: '',
    rate: null,
    password: '',
    confirmPassword: ''
  };

  showSuccessModal = false;

  constructor(private router: Router) {}

  register() {
    if (this.freelancer.password === this.freelancer.confirmPassword) {
      // Lógica para el registro del freelancer
      console.log('Desarrollador registrado:', this.freelancer);
      this.showSuccessModal = true;
    } else {
      alert('Las contraseñas no coinciden.');
    }
  }
  closeModal() {
    this.showSuccessModal = false;
    this.router.navigate(['/login']);
  }
  openGoogleAuth() {
    const googleAuthURL = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ARpgrqfahPgL75ggfdYMLu8k27GCVDPwO9gSM48fIpyW_5eFhu9xcvJ0WFDZ_yBKLHv6FyAqHptJsg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1743138878%3A1727373242782840&ddm=0';
    window.open(googleAuthURL, '_blanck');
  }
}
