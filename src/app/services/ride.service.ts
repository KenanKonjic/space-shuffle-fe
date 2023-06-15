import { Injectable } from '@angular/core';
import { Ride } from '../models/ride.model';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const URL = `${environment.backendUrl}/ride`;

@Injectable()



export class RideService {
  constructor(private http: HttpClient) {}

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(URL + '/list');
  }

  getRide(id: number): Observable<Ride> {
    return this.http.get<Ride>(`${URL}/${id}`);
  }

  createRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(`${URL}`, ride);
  }

  updateRide(ride: Ride): Observable<Ride> {
    return this.http.put<Ride>(`${URL}/${ride.id}`, ride);
  }

  deleteRide(rideId: number): Observable<Ride> {
    return this.http.delete<Ride>(`${URL}/${rideId}`);
  }
}
