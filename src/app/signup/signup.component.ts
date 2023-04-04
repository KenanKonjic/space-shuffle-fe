import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute){}

  navigateToHome(): void{
    this.router.navigate([
      'home'
    ])
  }
  navigateToChoose(): void{
    this.router.navigate([
      'choose-role'
    ])
  }

}

