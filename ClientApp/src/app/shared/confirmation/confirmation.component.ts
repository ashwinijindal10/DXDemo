import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CofirmationDialogData, ActionStatus } from '../../models/model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CofirmationDialogData) { }

  ngOnInit() {
  }

  onClick(result:ActionStatus){
    this.data.Result=result
    this.dialogRef.close(this.data);
  }

}
