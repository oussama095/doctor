import {Component, OnInit, ViewChild} from '@angular/core';
import {Calendar, CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular';
import {AppointmentService} from '../../../shared/service/appointment/appointment.service';
import {BlockerEvent} from '../model/CalendarEvent';
import {Appointment} from '../../../shared/model/appointment';
import {getBlockersEvent} from '../utils/appointmentUtils';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.scss']
})
export class BookingAppointmentComponent implements OnInit {

  blockers!: Appointment[];
  calendarEvents!: BlockerEvent[];
  calendarOptions!: CalendarOptions;
  calendar!: Calendar;
  newEvent = '';
  flag = true;
  formGroup!: FormGroup;
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService, private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control(''),
      start: this.fb.control('', Validators.required),
      end: this.fb.control('')
    });
    this.appointmentService.getBlockers('1').then(appointments => {
      this.blockers = appointments;
      this.calendarEvents = getBlockersEvent(this.blockers);
      this.calendarOptions = {
        initialView: 'timeGridWeek',
        editable: true,
        weekends: false,
        slotDuration: '01:00:00',
        slotMinTime: '09:00:00',
        slotMaxTime: '17:00:00',
        timeZone: 'UTC',
        contentHeight: '50vh',
        events: this.calendarEvents,
        expandRows: true,
        dateClick: this.dateClick.bind(this),
        allDaySlot: false,
        lazyFetching: false
      };
    });
  }

  // @ts-ignore - due to FullCalendar
  dateClick(info): void {
    if (this.flag) {
      this.calendar = this.calendarComponent.getApi();
      this.calendar.addEvent({
        id: 'newEvent',
        title: 'Next appointment',
        start: info.dateStr,
        color: 'green',
        overlap: false,
        editable: true,
        durationEditable: false
      });
      this.flag = false;
    }
  }

  addAppointment(): void {
    this.calendar = this.calendarComponent.getApi();
    // @ts-ignore
    const start = new Date(this.calendar.getEventById('newEvent').startStr);
    this.formGroup.get('start')?.setValue(start.toString());
    start.setHours(start.getHours() + 1);
    if (this.formGroup.valid) {
      this.formGroup.get('end')?.setValue(start.toString());
      console.log(this.formGroup.value);
      this.appointmentService.addAppointment('1', this.formGroup.value).then(appointment => {
        if (appointment) {
          this.router.navigateByUrl('/appointment').then();
        }
      }, error => console.log(error));
    }

  }
}
