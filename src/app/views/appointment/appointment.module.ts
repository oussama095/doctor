import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentComponent} from './appointment.component';
import {FullCalendarModule} from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listWeek from '@fullcalendar/list';
import {AppointmentDialogComponent} from './appointement-dialog/appointment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BookingAppointmentComponent} from './booking-appointment/booking-appointment.component';
import {AppointmentRoutingModule} from './appointment-routing.module';
import {AppointmentOverviewComponent} from './appointment-overview/appointment-overview.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listWeek
]);

@NgModule({
  declarations: [
    AppointmentOverviewComponent,
    AppointmentComponent,
    AppointmentDialogComponent,
    BookingAppointmentComponent,
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    FullCalendarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: []
})
export class AppointmentModule {
}
