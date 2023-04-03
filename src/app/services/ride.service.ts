import { Injectable } from '@angular/core';
import { Ride } from '../models/ride.model';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  rides: Ride[] = [
    {
      id: 1,
      driverName: 'John Doe',
      startingLocation: '123 Main St',
      endLocation: '456 Elm St',
      availableSeats: 3,
      time: new Date(2023, 3, 4, 10, 30, 0) // April 4th, 2023 at 10:30 AM
    },
    {
      id: 2,
      driverName: 'Jane Smith',
      startingLocation: '789 Oak Ave',
      endLocation: '234 Maple Blvd',
      availableSeats: 2,
      time: new Date(2023, 3, 5, 14, 0, 0) // April 5th, 2023 at 2:00 PM
    },
    {
      id: 3,
      driverName: 'Bob Johnson',
      startingLocation: '567 Pine St',
      endLocation: '890 Cedar Ln',
      availableSeats: 4,
      time: new Date(2023, 3, 6, 8, 15, 0) // April 6th, 2023 at 8:15 AM
    }
  ];

  constructor() { }

  getRides(): Ride[] {
    return this.rides;
  }

}
