import { Component } from '@angular/core';
// import {User} from "../constants/user.enum";
import {UserService} from "../services/user.service";
import {UserModel} from "../models/user.model";
import {RideService} from "../services/ride.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: UserModel;
  username: string | null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      name: '',
      surname: '',
      car: true
    };
    // @ts-ignore
    this.username = localStorage.getItem('username').toString();
    this.searchUserByUsername(this.username);
  }

  searchUserByUsername(username: string) {
    this.userService.searchUserByUsername(username).subscribe(
      (response: UserModel) => {
        this.user = response;
      },
      (error) => {
        console.error('Failed to search user:', error);
      }
    );
  }
}


