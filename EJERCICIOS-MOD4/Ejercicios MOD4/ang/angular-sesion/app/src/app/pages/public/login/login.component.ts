import { Component, inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onLogin(): void {
    console.log('Login clicked');
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Form data:', username, password); // Imprime los valores

      this.authService
        .login(username, password)
        .subscribe((isAuthenticated) => {
          console.log('Authentication result:', isAuthenticated); // Verifica el resultado de la autenticación
          if (isAuthenticated) {
            this.router.navigate(['/dashboard']);
          } else {
            alert('Invalid credentials');
          }
        });
    }
  }


  
}
