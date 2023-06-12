import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  username: string | null;

  constructor(private router: Router) {}

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
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
