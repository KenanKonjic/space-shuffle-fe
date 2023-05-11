import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RideService} from "../services/ride.service";
import {Ride} from "../models/ride.model";

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css']
})

export class CreateRideComponent implements OnInit{

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private rideService: RideService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'from': ['', Validators.required],
      'to': ['', Validators.required],
      'seats': ['', Validators.required],
      'time': ['', Validators.required],
    });
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    let from = this.form.get('from')?.value;
    let to = this.form.get('to')?.value;
    let seats = this.form.get('seats')?.value;
    let time = this.form.get('time')?.value;
    let newRide: Ride = {id:123,startingLocation: from, time: time, availableSeats: seats, endLocation: to}
    this.rideService.createRide(newRide).subscribe(() => {
      this.navigateToRides();
    });
  }

  private navigateToRides() {
    this.router.navigate([
      'rides'
    ])
  }
}
