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
      'date': ['', Validators.required],
    });
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.rideService.createRide(this.form.value).subscribe((ride: Ride) => {
      this.navigateToRides(ride.id!);
    });
  }

  private navigateToRides(rideId: number) {
    this.router.navigate([
      'choose-ride'
    ])
  }
}
