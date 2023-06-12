import { Component } from '@angular/core';
// import {User} from "../constants/user.enum";
import {UserService} from "../services/user.service";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: UserModel;
  constructor() { }

  ngOnInit() {
    this.user = {
      username: 'adna123',
      password: 'adna123',
      name: 'Adna',
      surname: 'Beganovic',
      email: 'adnabeg@example.com',
      hasCar: true
    };
  }
  }

  // public user: User;
  // private id: number;
  //
  // constructor(private userService: UserService) { }
  //
  // ngOnInit(): void {
  //   this.loadUserProfile();
  // }
  //
  // private loadUserProfile(): void {
  //   this.userService.getUser(this.id).subscribe(
  //     (user: User) => {
  //       this.user = user;
  //     },
  //     (error: any) => {
  //       console.error('Error loading user profile:', error);
  //     }
  //   );
  // }


