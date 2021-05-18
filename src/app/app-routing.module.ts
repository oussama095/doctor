import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppointmentRoutingModule} from './views/appointment/appointment-routing.module';
import {PageNotFoundComponent} from './shared/component/page-not-found/page-not-found.component';
import {ProfileRoutingModule} from './views/profile/profile-routing.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'profile', redirectTo: '', pathMatch: 'full'},
  {path: 'appointment', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
      // , {enableTracing: true}
    ),
    AppointmentRoutingModule,
    ProfileRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
