import { Component, ViewChild } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TablepopupComponent } from './tablepopup/tablepopup.component';
import { TableeditpopupComponent } from './tableeditpopup/tableeditpopup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule, 
  ],
})
export class DialogComponent {
  title = 'app1';
  displayedColumns: string[] = ['code', 'name', 'phone', 'email', 'action'];
  dataSource: any;
  empdata: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TablepopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(TableeditpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        empcode:code
      }
    })
  }
  

  getrow(row: any) {
    //console.log(row);
  }

  FunctionEdit(code: any) {
    this.OpenDialog('1000ms','600ms',code)
  }
  
  FunctionDelete(code: any) {
    console.log("Removed successfully.")
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
}

