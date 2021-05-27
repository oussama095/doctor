import {Component, OnInit} from '@angular/core';
import {Notification} from '../../../model/notification';
import {MatDialog} from '@angular/material/dialog';
import {NotificationDialogComponent} from '../notification-dialog/notification-dialog.component';
import {NotificationService} from '../../../service/notification/notification.service';
import {AuthService} from '../../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  notifications: Notification[] = [];
  notificationsBadge: number | null = 0;

  constructor(public dialog: MatDialog,
              private notificationService: NotificationService,
              private authenticationService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.updateNotification();
  }

  updateNotification(): void {
    this.notificationService.getAllNotificationsOfPatient().then((notification: Notification[]) => {
      this.notifications = notification;
      this.notificationsBadge = 0;
      this.notifications.forEach(element => {
        if (!element.isRead) {
          // @ts-ignore - can't be null
          this.notificationsBadge++;
        }
      });
      this.notificationsBadge = this.notificationsBadge ? this.notificationsBadge : null;
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

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('').then();
  }
}
