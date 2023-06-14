import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../login/login-response.interface';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private isAdmin: boolean =
  localStorage.getItem('username') === 'salihmusic2@gmail.com' ? true : false;
  token: string | null = localStorage.getItem('token');
  username: string | null = localStorage.getItem('username');

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  public login(username: string, password: string): Promise<boolean> {
    const payload = {
      username: username,
      password: password,
    };

    return new Promise<boolean>((resolve) => {
      this.http
        .post<LoginResponse>(`${environment.backendUrl}/authenticate`, payload)
        .subscribe(
          (response) => {
            this.token = response.token;
            localStorage.setItem('token', this.token);
            localStorage.setItem('username', username);
            this.isAuthenticated = true;
          },
          (error) => {
            this.isAuthenticated = false;
            this.toastr.error('Login failed!');
            console.error(error);
          }
        )
        .add(() => {
          resolve(this.isAuthenticated);
        });
    });
  }

  public logout(): void {
    this.isAuthenticated = false;
  }

  public isLoggedIn(): boolean {
    if (this.token && this.username) {
      return true;
    }
    return false;
  }

  public isAdminLogged(): boolean {
    return this.isAdmin;
  }
}
