import { Component, OnInit } from '@angular/core';
import { Ride } from '../models/ride.model';
import { RideService } from '../services/ride.service';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-choose-ride',
  templateUrl: './choose-ride.component.html',
  styleUrls: ['./choose-ride.component.css']
})
export class ChooseRideComponent implements OnInit {
  rides: Ride[] = [];
  displayedColumns: string[] = ['id', 'startingLocation', 'endLocation', 'availableSeats', 'time', 'actions'];

  constructor(private rideService: RideService, private router: Router, private http:HttpClient) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login'], {queryParams: {loginRequired: true}});
    } else {
      this.rideService.getRides().subscribe((rides) => {
        this.rides = rides;
        console.log(rides);
      });
    }
  }

  selectRide(id: number) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login'], { queryParams: { loginRequired: true } });
    } else {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      const options = { headers: headers };
      const url = `https://space-shuffle.herokuapp.com/ride/${id}`;

      this.http.put<Ride>(url, {}, options).subscribe(
        (updatedRide) => {
          const rideIndex = this.rides.findIndex((ride) => ride.id === id);
          if (rideIndex !== -1) {
            this.rides[rideIndex] = updatedRide;
          }
          console.log('Ride selected:', updatedRide);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['choose-ride']);
          });
        },
        (error) => {
          console.error('Error selecting ride:', error);
        }
      );
    }
  }

  public navigateToPopup() {
    this.router.navigate([
      'poppup'
    ])
  }
}


