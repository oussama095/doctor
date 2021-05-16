import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptionComponent } from './transcription.component';
import { TranscriptionOverviewComponent } from './transcription-overview/transcription-overview.component';
import { TranscriptionDetailsComponent } from './transcription-details/transcription-details.component';
import { TranscriptionDialogComponent } from './transcription-dialog/transcription-dialog.component';
import { MedicationOverviewComponent } from './medication-overview/medication-overview.component';
import { MedicationDetailsComponent } from './medication-details/medication-details.component';
import { MedicationDialogComponent } from './medication-dialog/medication-dialog.component';



@NgModule({
  declarations: [
    TranscriptionComponent,
    TranscriptionOverviewComponent,
    TranscriptionDetailsComponent,
    TranscriptionDialogComponent,
    MedicationOverviewComponent,
    MedicationDetailsComponent,
    MedicationDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TranscriptionModule { }
