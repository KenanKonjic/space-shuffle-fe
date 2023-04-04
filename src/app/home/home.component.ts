import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  navigateToLogin(): void{
    this.router.navigate([
      'login'
    ])

  }
  navigateToSignup(): void{
    this.router.navigate([
      'signup'
    ])
  }
}
