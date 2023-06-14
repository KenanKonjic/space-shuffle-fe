import { Component, OnInit } from '@angular/core';
import { Ride } from '../../models/ride.model';
import { RideService } from '../../services/ride.service';
import { Router } from '@angular/router';
import { UpdateRideComponent } from './update-ride/update-ride.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DeleteRideComponent } from './delete-ride/delete-ride.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  rides: Ride[] = [];
  displayedColumnsDriver: string[] = [
    'id',
    'driverName',
    'startingLocation',
    'endLocation',
    'availableSeats',
    'time',
    'actions',
  ];
  displayedColumnsUser: string[] = [
    'id',
    'driverName',
    'startingLocation',
    'availableSeats',
    'actions',
  ];
  constructor(
    private rideService: RideService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.setRides();
  }

  setRides(): void {
    this.rideService.getRides().subscribe((rides) => {
      this.rides = rides;
    });
  }

  selectRide(ride: Ride) {
    const dialogRef = this.dialog.open(UpdateRideComponent, {
      width: '400px',
      data: ride,
    });

    dialogRef.afterClosed().subscribe((ride: Ride) => {
      if (ride) {
        this.rideService.updateRide(ride).subscribe(
          (res) => {
            this.toastr.success(`Ride with id ${res.id} successfully updated!`);
            this.setRides();
          },
          (error) => {
            this.toastr.error(`Ride with id ${ride.id} could not be updated!`);
          }
        );
      }
    });
  }

  deleteRide(rideId: number): void {
    const dialogRef = this.dialog.open(DeleteRideComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(rideId);
      if (result === 'delete') {
        this.rideService.deleteRide(rideId).subscribe((res) => {
          this.toastr.success(`Ride with id ${rideId} successfully deleted!`);
          this.setRides();
        });
      }
    });
  }

  title = 'sidenav';
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
