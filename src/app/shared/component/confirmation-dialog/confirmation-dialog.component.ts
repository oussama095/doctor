import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Confirmation {
  name: string;
  type: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  type!: string;
  name!: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: Confirmation) {
  }

  ngOnInit(): void {
    this.type = this.data.type;
    this.name = this.data.name;
  }

}
