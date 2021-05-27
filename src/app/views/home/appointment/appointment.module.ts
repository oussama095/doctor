import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentComponent} from './appointment.component';
import {FullCalendarModule} from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listWeek from '@fullcalendar/list';
import {AppointmentDialogComponent} from './appointement-dialog/appointment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BookingAppointmentComponent} from './booking-appointment/booking-appointment.component';
import {AppointmentRoutingModule} from './appointment-routing.module';
import {AppointmentOverviewComponent} from './appointment-overview/appointment-overview.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listWeek,
  timeGridPlugin
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
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: []
})
export class AppointmentModule {
}
