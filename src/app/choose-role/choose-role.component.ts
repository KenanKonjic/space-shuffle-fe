import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-choose-role',
  templateUrl: './choose-role.component.html',
  styleUrls: ['./choose-role.component.css']
})
export class ChooseRoleComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  navigateToChoose(): void {
    this.router.navigate([
      'choose-ride'
    ])

  }

  navigateToCreate(): void {
    this.router.navigate([
      'create-ride'
    ])
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login'], {queryParams: {loginRequired: true}});
    } else {
    }
  }
}
