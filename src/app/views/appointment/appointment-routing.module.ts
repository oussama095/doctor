import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppointmentComponent} from './appointment.component';
import {BookingAppointmentComponent} from './booking-appointment/booking-appointment.component';
import {AppointmentOverviewComponent} from './appointment-overview/appointment-overview.component';


const appointmentRoutes: Routes = [
  {
    path: 'appointment', component: AppointmentComponent,
    children: [
      {path: '', component: AppointmentOverviewComponent},
      {path: 'booking', component: BookingAppointmentComponent}
    ]
  },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appointmentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppointmentRoutingModule {
}
