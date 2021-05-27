import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranscriptionComponent} from './transcription.component';
import {TranscriptionOverviewComponent} from './transcription-overview/transcription-overview.component';
import {MedicationOverviewComponent} from './medication-overview/medication-overview.component';
import {MedicationDialogComponent} from './medication-dialog/medication-dialog.component';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {TranscriptionRoutingModule} from './transcription-routing.module';


@NgModule({
  declarations: [
    TranscriptionComponent,
    TranscriptionOverviewComponent,
    MedicationOverviewComponent,
    MedicationDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranscriptionRoutingModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class TranscriptionModule {
}
