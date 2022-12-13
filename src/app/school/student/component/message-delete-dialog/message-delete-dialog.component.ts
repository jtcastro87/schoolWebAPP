import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-delete-dialog',
  templateUrl: './message-delete-dialog.component.html',
  styleUrls: ['./message-delete-dialog.component.css']
})

export class MessageDeleteDialogComponent  {

  // Constructor
  constructor(private dialogRef: MatDialogRef<MessageDeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string ) { }

  // Se ejecuta al precionar Yes
  remove(){
    this.dialogRef.close(true);
  }

  // Se ejecuta al precionar cancel
  cancel(){
    this.dialogRef.close(false);
  }


  
}
