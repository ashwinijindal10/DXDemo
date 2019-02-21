import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private mDialog: MatDialog) { }

  showPopup(component,inputData, callback ){
    const dialogRef = this.mDialog.open(component, {
      width: '400px',
      data: inputData
    });
    dialogRef.updatePosition({ top: '5%' });

    dialogRef.afterClosed().subscribe(callback);
  }

}
