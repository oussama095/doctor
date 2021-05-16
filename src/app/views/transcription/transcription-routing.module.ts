import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TranscriptionComponent} from './transcription.component';
import {TranscriptionOverviewComponent} from './transcription-overview/transcription-overview.component';
import {TranscriptionDetailsComponent} from './transcription-details/transcription-details.component';
import {MedicationOverviewComponent} from './medication-overview/medication-overview.component';
import {MedicationDetailsComponent} from './medication-details/medication-details.component';


const transcriptionRoutes: Routes = [
  {
    path: 'transcription', component: TranscriptionComponent,
    children: [
      {path: '', component: TranscriptionOverviewComponent},
      {path: ':id', component: TranscriptionDetailsComponent}
    ]
  },
  {
    path: 'medication',
    children: [
      {path: '', component: MedicationOverviewComponent},
      {path: ':id', component: MedicationDetailsComponent}
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(transcriptionRoutes)
  ]
})
export class TranscriptionRoutingModule {
}
