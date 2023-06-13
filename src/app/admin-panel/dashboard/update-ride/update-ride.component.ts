import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ride } from 'src/app/models/ride.model';

@Component({
  selector: 'app-update-ride',
  templateUrl: './update-ride.component.html',
  styleUrls: ['./update-ride.component.css'],
})
export class UpdateRideComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateRideComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ride
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Implement your logic to save the edited data
    this.dialogRef.close(this.data); // Pass the updated data object back to the dialog opener
  }
}
