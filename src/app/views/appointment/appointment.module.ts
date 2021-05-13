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


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listWeek
]);

@NgModule({
  declarations: [AppointmentComponent, AppointmentDialogComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [AppointmentComponent]
})
export class AppointmentModule {
}
