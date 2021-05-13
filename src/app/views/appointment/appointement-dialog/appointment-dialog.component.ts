import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CalendarEvent} from '../model/CalendarEvent';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent implements OnInit {

  calendarEvent!: CalendarEvent;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { calendarEvent: CalendarEvent }) {
  }

  ngOnInit(): void {
    this.calendarEvent = this.data.calendarEvent;
    console.log(this.calendarEvent);
  }

}
