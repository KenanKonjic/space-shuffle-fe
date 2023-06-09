import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Route} from '../constants/route.enum';

@Injectable()
export class RideIdResolver implements Resolve<string> {

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): string {
    return route.paramMap.get(Route.RIDE_ID)!;
  }
}
