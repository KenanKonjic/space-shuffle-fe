import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from './login-response.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth-guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token: string | undefined;
  loginForm!: FormGroup;
  loginSuccessfull: boolean = true;

  constructor(
    private formBuilder: FormBuilder,

    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      psw: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('psw')?.value;
      this.authService.login(username, password).then((loginSuccessfull) => {
        if (loginSuccessfull) {
          this.router.navigate(['/choose-role']);
        }
      });
    }
  }


  navigateToHome(): void {
    this.router.navigate(['']);

  navigateToSignup(): void {
    this.router.navigate([
      'signup'
    ])

  }
}
