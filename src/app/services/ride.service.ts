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
      startingLocation: 'Otoka',
      endLocation: 'SSST',
      availableSeats: 3,
      time: new Date(2023, 3, 4, 10, 30, 0)
    },
    {
      id: 2,
      driverName: 'John Doe',
      startingLocation: 'Cengic Vila',
      endLocation: 'SSST',
      availableSeats: 2,
      time: new Date(2023, 3, 5, 14, 0, 0)
    },
    {
      id: 3,
      driverName: 'John Johnson',
      startingLocation: 'SSST',
      endLocation: 'Nedzarici',
      availableSeats: 4,
      time: new Date(2023, 3, 6, 8, 15, 0)
    }
  ];

  constructor() { }

  getRides(): Ride[] {
    return this.rides;
  }

}
