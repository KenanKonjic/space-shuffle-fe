import { Component,OnInit } from '@angular/core';
import {Ride} from "../../models/ride.model";
import {RideService} from "../../services/ride.service";
import {Router} from "@angular/router";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  rides: Ride[] = [];
  displayedColumns: string[] = ['id', 'driverName', 'startingLocation',  'availableSeats', 'actions'];

  constructor(private rideService: RideService, private router: Router) { }

  // ngOnInit() {
  //   this.rides = this.rideService.getRides();
  // }

  selectRide(ride: Ride) {
    this.router.navigate(['home']);
  }
  title='sidenav';
  isSideNavCollapsed = false;
  screenWidth= 0;
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
