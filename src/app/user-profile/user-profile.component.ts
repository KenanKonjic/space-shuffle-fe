import { Component } from '@angular/core';
import {User} from "../constants/user.enum";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public user: User;
  private id: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  private loadUserProfile(): void {
    this.userService.getUser(this.id).subscribe(
      // (user: User) => {
      //   this.user = user;
      // },
      (error: any) => {
        console.error('Error loading user profile:', error);
      }
    );
  }
}

