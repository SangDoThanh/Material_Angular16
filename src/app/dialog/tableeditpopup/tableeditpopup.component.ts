import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tableeditpopup',
  templateUrl: './tableeditpopup.component.html',
  styleUrls: ['./tableeditpopup.component.css']
})
export class TableeditpopupComponent implements OnInit{
  constructor(public dialogref: MatDialogRef<TableeditpopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  desdata: any;
  respdata: any;
  editdata: any;

  ngOnInit(): void {
  }

  Reactiveform = new FormGroup({
    code: new FormControl({ value: 0, disabled: true }),
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    designation: new FormControl(""),
    gender: new FormControl("M"),
    isactive: new FormControl(true)
  });
}
