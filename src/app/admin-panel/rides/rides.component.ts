import {Component, OnInit} from '@angular/core';
import {Ride} from "../../models/ride.model";
import {RideService} from "../../services/ride.service";
import {Router} from "@angular/router";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})

export class RidesComponent{
  rides: Ride[] = [];
  displayedColumns: string[] = ['id', 'driverName', 'startingLocation', 'endLocation', 'availableSeats', 'time', 'actions'];

  constructor(private rideService: RideService, private router: Router) { }
  ngOnInit() {
    this.rideService.getRides().subscribe((rides)=> {
      this.rides=rides;
      console.log(rides);
    });
  }




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
