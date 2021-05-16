import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CalendarEvent} from '../model/CalendarEvent';
import {ConfirmationDialogComponent} from '../../../shared/component/confirmation-dialog/confirmation-dialog.component';
import {AppointmentService} from '../../../shared/service/appointment/appointment.service';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit {

  calendarEvent!: CalendarEvent;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AppointmentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { calendarEvent: CalendarEvent },
              private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.calendarEvent = this.data.calendarEvent;
    console.log(this.calendarEvent);
  }

  openConfirmationDialog(): void {
    this.dialog.open(ConfirmationDialogComponent, {
      panelClass: 'container',
      autoFocus: false,
      restoreFocus: false,
      data: {text: this.calendarEvent.title}
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.appointmentService.deleteAppointment(this.calendarEvent.extendedProps.id.toString()).then(() => {
          this.dialogRef.close(true);
        });
      }
    });

  }
}
