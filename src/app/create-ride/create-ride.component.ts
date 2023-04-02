import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-offer-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})

export class CreateRideComponent {
  locations: string[] = ['Otoka', 'Pofalici', 'Cengic Vila', 'Stup'];
  from?: string;
  to?: string;
  datetime?: Date;


  constructor(private router: Router) {
  }

  onSubmit(form: any) {
    console.log(form);
    this.router.navigate(['home']);
  }

  submitForm() {
    this.router.navigate(['home']);
   }

  createRide() {
    if (!this.from || !this.to || !this.datetime) {
      console.log('Please fill in all fields!');
      return;
    }


// export class CreateRideComponent {
//  /* from: string = '';
//   to: string = '';
//   date: string = '';
//   time: string = '';
//   seats: number = 1;*/
//
//
//   points: Point[] = [
//     {value: 'otoka', viewValue: 'Otoka'},
//     {value: 'cvila', viewValue: 'Cengic Vila'},
//     {value: 'nedzarici', viewValue: 'Nedzarici'},
//   ];
//
//  /* points: string[] = [
//     'Ciglane',
//     'Otoka',
//     'Cengic Vila',
//     'Dolac Malta',
//     'Alipasino Polje',
//     'Nedzarici',
//     'Stup',
//   ]; */
//
//   constructor(private router:Router) {}
//
//   submitForm() {
//     this.router.navigate(['home']);
//   }
  }
}

