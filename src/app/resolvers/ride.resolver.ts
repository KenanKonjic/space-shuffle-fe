import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RideService} from '../services/ride.service';
import {Ride} from '../models/ride.model';
import {Route} from '../constants/route.enum';

@Injectable()
export class RideResolver implements Resolve<Ride> {

  constructor(private rideService: RideService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Ride> {
    const rideId: string = route.paramMap.get(Route.RIDE_ID)!;
    return this.rideService.getRide(+rideId);
  }
}
