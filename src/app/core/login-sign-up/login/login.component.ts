import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/common/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.username, this.password);
  }

  navigateToSignup() {
    this.router.navigate(['login/sign-up']);  // Navigate to signup page
  }

}
