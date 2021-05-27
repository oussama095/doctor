import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const homeRoutes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'transcription',
        loadChildren: () => import('./transcription/transcription.module').then(m => m.TranscriptionModule)
      },
      {
        path: 'appointment',
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
