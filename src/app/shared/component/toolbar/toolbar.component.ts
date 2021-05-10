import {Component, OnInit} from '@angular/core';
import {Notification} from '../../schema/notification';
import {MatDialog} from '@angular/material/dialog';
import {NotificationDialogComponent} from '../notification-dialog/notification-dialog.component';
import {NotificationService} from '../../service/notification/notificationService';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  notifications: Notification[] = [];
  notificationsBadge = 0;

  constructor(public dialog: MatDialog, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.updateNotification();
  }

  updateNotification(): void {
    this.notificationService.getAllNotifications().then((notification: Notification[]) => {
      this.notifications = notification;
      this.notificationsBadge = 0;
      this.notifications.forEach(element => {
        if (!element.isRead) {
          this.notificationsBadge++;
        }
      });
    });
  }

  openNotificationDialog(notification: Notification): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent, {
      panelClass: 'container',
      autoFocus: false,
      disableClose: true,
      restoreFocus: false,
      data: {notification}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notificationService.setReadNotification(notification.id).then(() => {
          this.updateNotification();
        });
      }
    });
  }
}
