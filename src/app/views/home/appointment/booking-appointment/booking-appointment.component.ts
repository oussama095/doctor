import {Component, OnInit, ViewChild} from '@angular/core';
import {Calendar, CalendarOptions, FullCalendarComponent} from '@fullcalendar/angular';
import {BlockerEvent} from '../model/CalendarEvent';
import {getBlockersEvent} from '../utils/appointmentUtils';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Appointment} from '../../../../shared/model/appointment';
import {AppointmentService} from '../../../../shared/service/appointment/appointment.service';

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
  firstClick = false;
  formGroup!: FormGroup;
  appointmentId!: string;
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  constructor(private fb: FormBuilder,
              private appointmentService: AppointmentService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.appointmentService.getBlockers('1').then(blockers => {
      this.blockers = blockers;
      this.route.params.subscribe(params => {
        this.appointmentId = params.appointmentId;
        if (!this.appointmentId) {
          this.formGroup = this.fb.group({
            title: this.fb.control('', Validators.required),
            description: this.fb.control(''),
            start: this.fb.control('', Validators.required),
            end: this.fb.control('')
          });
          this.calendarEvents = getBlockersEvent(this.blockers);
          this.calendarOptions = {
            initialView: 'timeGridWeek',
            editable: true,
            weekends: false,
            slotDuration: '01:00:00',
            slotMinTime: '09:00:00',
            slotMaxTime: '18:00:00',
            timeZone: 'UTC',
            contentHeight: '50vh',
            events: this.calendarEvents,
            expandRows: true,
            dateClick: this.dateClick.bind(this),
            allDaySlot: false,
            lazyFetching: false
          };

        } else {
          this.flag = false;
          this.appointmentService.getAppointment(this.appointmentId).then(appointment => {
            this.formGroup = this.fb.group({
              title: this.fb.control(appointment.title, Validators.required),
              description: this.fb.control(appointment.description),
              start: this.fb.control(appointment.start, Validators.required),
              end: this.fb.control(appointment.end)
            });

            this.calendarEvents = getBlockersEvent(this.blockers, appointment);
            this.calendarOptions = {
              initialView: 'timeGridWeek',
              editable: true,
              weekends: false,
              slotDuration: '01:00:00',
              slotMinTime: '09:00:00',
              slotMaxTime: '18:00:00',
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
      });
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
    this.firstClick = true;
    this.calendar = this.calendarComponent.getApi();
    // @ts-ignore
    const start = new Date(this.calendar.getEventById('newEvent')?.startStr);
    try {
      this.formGroup.get('start')?.setValue(start.toISOString());
      start.setMinutes(start.getMinutes() + 59);
      this.formGroup.get('end')?.setValue(start.toISOString());
    } catch (e) {
      console.log(e);
    }
    if (this.formGroup.valid) {
      let servicePromise: Promise<Appointment>;
      if (!this.appointmentId) {
        servicePromise = this.appointmentService.addAppointment(this.formGroup.value);
      } else {
        servicePromise = this.appointmentService.updateAppointment(this.appointmentId, this.formGroup.value);
      }
      servicePromise.then(appointment => {
        if (appointment) {
          this.router.navigateByUrl('/appointment').then();
        }
      }, error => console.log(error));
    }

  }
}
