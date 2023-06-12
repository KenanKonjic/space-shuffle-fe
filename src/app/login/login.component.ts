import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppModule } from '../app.module';
import { LoginResponse } from './login-response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  token: string | undefined;
  loginForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      psw: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const psw = this.loginForm.get('psw')?.value;


      const payload = {
        username: username,
        password: psw
      };

      this.http.post<LoginResponse>('https://space-shuffle.herokuapp.com/authenticate', payload)
        .subscribe(
          (response) => {
            this.token = response.token;
            localStorage.setItem('token', this.token);
            localStorage.setItem('username', username);
            this.router.navigate(['/choose-role']);
          },
          (error) => {
            console.error('Login failed', error);
          }
        );


    }
  }

  navigateToSignup(): void {
    this.router.navigate([
      'signup'
    ])
  }
}
