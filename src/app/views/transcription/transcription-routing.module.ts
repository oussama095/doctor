import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TranscriptionComponent} from './transcription.component';
import {MedicationOverviewComponent} from './medication-overview/medication-overview.component';
import {TranscriptionOverviewComponent} from './transcription-overview/transcription-overview.component';


const transcriptionRoutes: Routes = [

  {
    path: '', component: TranscriptionComponent,
    children: [
      {path: 'transcription', component: TranscriptionOverviewComponent},
      {path: 'medication', component: MedicationOverviewComponent}]
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
