import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CalendarEvent} from '../model/CalendarEvent';
import {Router} from '@angular/router';
import {AppointmentService} from '../../../../shared/service/appointment/appointment.service';
import {ConfirmationDialogComponent} from '../../../../shared/component/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit {

  calendarEvent!: CalendarEvent;
  date!: string;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AppointmentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { calendarEvent: CalendarEvent },
              private appointmentService: AppointmentService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.calendarEvent = this.data.calendarEvent;
    this.date = this.formatDate(this.calendarEvent.start);
  }

  openConfirmationDialog(): void {
    this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'container',
      autoFocus: false,
      restoreFocus: false,
      data: {
        name: this.calendarEvent.title,
        type: 'appointment'
      }
    }).afterClosed().subscribe((confirmed: boolean) => {
      console.log(confirmed);
      if (confirmed) {
        this.appointmentService.deleteAppointment(this.calendarEvent.extendedProps.id.toString()).then(() => {
          this.dialogRef.close(true);
        });
      }
    });

  }

  formatDate(date: string): string {
    const dateISO: Date = new Date(date);
    return dateISO.getFullYear() + '/' + dateISO.getMonth() + '/'
      + dateISO.getDate() + ' at ' + dateISO.getHours() + ':00';
  }


  goToEdit(): void {
    this.router.navigate(['appointment/booking', {appointmentId: this.calendarEvent.extendedProps.id}]).then(fulfilled => {
        if (fulfilled) {
          this.dialogRef.close();
        }
      }
    );
  }
}
