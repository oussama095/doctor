import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';
import {CalendarEvent} from '../model/CalendarEvent';
import {MatDialog} from '@angular/material/dialog';
import {getCalendarEvent} from '../utils/appointmentUtils';
import {AppointmentDialogComponent} from '../appointement-dialog/appointment-dialog.component';
import {Appointment} from '../../../../shared/model/appointment';
import {AppointmentService} from '../../../../shared/service/appointment/appointment.service';


@Component({
  selector: 'app-appointment-overview',
  templateUrl: './appointment-overview.component.html',
  styleUrls: ['./appointment-overview.component.scss']
})
export class AppointmentOverviewComponent implements OnInit {
  appointments!: Appointment[];
  calendarEvents!: CalendarEvent[];
  calendarOptions!: CalendarOptions;


  constructor(public dialog: MatDialog, private appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.displayAppointments();
  }

  // tslint:disable-next-line:typedef
  handleDateClick(event: any) {
    const calendarEvent = new CalendarEvent(event.event.title, event.event.start, event.event.end, {
      id: event.event.extendedProps.id,
      description: event.event.extendedProps.description
    });
    this.dialog.open(AppointmentDialogComponent, {
      panelClass: 'container',
      autoFocus: false,
      restoreFocus: false,
      data: {calendarEvent}
    }).afterClosed().subscribe((updateCalendar) => {
      if (updateCalendar) {
        this.displayAppointments();
      }
    });
  }

  displayAppointments(): void {
    this.appointmentService.getAppointments().then(appointments => {
      this.appointments = appointments;
      this.calendarEvents = getCalendarEvent(this.appointments);
      this.calendarOptions = {
        initialView: 'listWeek',
        timeZone: 'UTC',
        contentHeight: 'auto',
        eventClick: this.handleDateClick.bind(this), // bind is important!,
        events: this.calendarEvents
      };
    });
  }
}
