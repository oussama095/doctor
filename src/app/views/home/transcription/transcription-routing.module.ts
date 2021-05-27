import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedicationOverviewComponent} from './medication-overview/medication-overview.component';
import {TranscriptionOverviewComponent} from './transcription-overview/transcription-overview.component';


const transcriptionRoutes: Routes = [

  {path: '', component: TranscriptionOverviewComponent},
  {path: 'medication', component: MedicationOverviewComponent}

];


@NgModule({
  imports: [RouterModule.forChild(transcriptionRoutes)],
  exports: [RouterModule]

})
export class TranscriptionRoutingModule {
}
