import { Injectable } from '@angular/core';
import { Ride } from '../models/ride.model';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RideService {

  // rides: Ride[] = [
  //   {
  //     id: 1,
  //     driverName: 'John Doe',
  //     startingLocation: 'Otoka',
  //     endLocation: 'SSST',
  //     availableSeats: 3,
  //     time: new Date(2023, 3, 4, 10, 30, 0)
  //   },
  //   {
  //     id: 2,
  //     driverName: 'John Doe',
  //     startingLocation: 'Cengic Vila',
  //     endLocation: 'SSST',
  //     availableSeats: 2,
  //     time: new Date(2023, 3, 5, 14, 0, 0)
  //   },
  //   {
  //     id: 3,
  //     driverName: 'John Johnson',
  //     startingLocation: 'SSST',
  //     endLocation: 'Nedzarici',
  //     availableSeats: 4,
  //     time: new Date(2023, 3, 6, 8, 15, 0)
  //   }
  // ];

  private readonly baseUrl: string = `${environment.backendUrl}/ride`;

  constructor(private http: HttpClient) {
  }

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.baseUrl);
  }

  getRide(id:number): Observable<Ride> {
    return this.http.get<Ride>(`${this.baseUrl}/${id}`);
  }

  createRide(ride:Ride): Observable<Ride> {
    return this.http.post<Ride>(`${this.baseUrl}`, ride);
  }

}
