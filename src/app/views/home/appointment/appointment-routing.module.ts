import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingAppointmentComponent} from './booking-appointment/booking-appointment.component';
import {AppointmentOverviewComponent} from './appointment-overview/appointment-overview.component';


const appointmentRoutes: Routes = [

  {path: '', component: AppointmentOverviewComponent},
  {path: 'booking', component: BookingAppointmentComponent},
];


@NgModule({
  imports: [RouterModule.forChild(appointmentRoutes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule {
}
