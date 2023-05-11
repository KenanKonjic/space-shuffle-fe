import { Injectable } from '@angular/core';
import { Ride } from '../models/ride.model';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RideService {

  private readonly baseUrl: string = `${environment.backendUrl}/ride`;

  constructor(private http: HttpClient) {
  }

  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.baseUrl + '/list');
  }

  getRide(id:number): Observable<Ride> {
    return this.http.get<Ride>(`${this.baseUrl}/${id}`);
  }

  createRide(ride:Ride): Observable<Ride> {
    return this.http.post<Ride>(`${this.baseUrl}`, ride);
  }

}
