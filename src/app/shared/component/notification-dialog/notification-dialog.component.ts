import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Notification} from '../../schema/notification';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {
  notification!: Notification;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { notification: Notification }) {
  }

  ngOnInit(): void {
    this.notification = this.data.notification;
  }


}
