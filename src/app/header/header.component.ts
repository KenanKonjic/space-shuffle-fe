import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../auth-guard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  username: string | null;

  constructor(private router: Router,private authService: AuthService,) {}

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
    // this.authService.logout();
  }
  create(): void {
    this.router.navigate(['create-ride']);
  }
  choose(): void {
    this.router.navigate(['choose-ride']);
  }

  ngOnInit(): void {
      // @ts-ignore
    this.username=localStorage.getItem('username').toString();
  }
}
