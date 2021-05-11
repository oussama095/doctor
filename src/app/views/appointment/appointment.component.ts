import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  // @ts-ignore
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      {title: 'event 1', date: '2021-05-01'},
      {title: 'event 2', date: '2021-05-02'}
    ]
  };


  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr);
  }

}
