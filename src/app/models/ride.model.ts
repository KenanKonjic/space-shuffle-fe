import {Time} from "@angular/common";

export interface Ride {
  id: number;
  startingLocation: string;
  endLocation: string;
  availableSeats: number;
  time: string;
}
