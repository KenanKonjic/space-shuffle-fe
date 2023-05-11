import { Component, OnInit } from '@angular/core';
import { Ride } from '../models/ride.model';
import { RideService } from '../services/ride.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-ride',
  templateUrl: './choose-ride.component.html',
  styleUrls: ['./choose-ride.component.css']
})
export class ChooseRideComponent implements OnInit {
  rides: Ride[] = [];
  displayedColumns: string[] = ['id', 'startingLocation', 'endLocation', 'availableSeats', 'time', 'actions'];

  constructor(private rideService: RideService, private router: Router) { }

  ngOnInit() {
    this.rideService.getRides().subscribe((rides) => {
      this.rides = rides;
      console.log(rides);
    });
  }

  // selectRide(ride: Ride) {
  //   this.router.navigate(['home']);
  // }
}


