import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialForm';
  constructor(private dialog: MatDialog){

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
     width : '30%'
    })
  }
}
