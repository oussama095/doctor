import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranscriptionComponent} from './transcription.component';
import {TranscriptionOverviewComponent} from './transcription-overview/transcription-overview.component';
import {TranscriptionDetailsComponent} from './transcription-details/transcription-details.component';
import {TranscriptionDialogComponent} from './transcription-dialog/transcription-dialog.component';
import {MedicationOverviewComponent} from './medication-overview/medication-overview.component';
import {MedicationDetailsComponent} from './medication-details/medication-details.component';
import {MedicationDialogComponent} from './medication-dialog/medication-dialog.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    TranscriptionComponent,
    TranscriptionOverviewComponent,
    TranscriptionDetailsComponent,
    TranscriptionDialogComponent,
    MedicationOverviewComponent,
    MedicationDetailsComponent,
    MedicationDialogComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TranscriptionModule {
}
