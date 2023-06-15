import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-ride',
  templateUrl: './delete-ride.component.html',
  styleUrls: ['./delete-ride.component.css'],
})
export class DeleteRideComponent {
  constructor(private dialogRef: MatDialogRef<DeleteRideComponent>) {}

  onCloseClick(action: string) {
    this.dialogRef.close(action);
  }
}
