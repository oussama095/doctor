import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MedicationDialogComponent} from '../medication-dialog/medication-dialog.component';
import {Transcription} from '../../../../shared/model/transcription';
import {TranscriptionService} from '../../../../shared/service/transcription/transcription.service';

@Component({
  selector: 'app-transcription-overview',
  templateUrl: './transcription-overview.component.html',
  styleUrls: ['./transcription-overview.component.scss']
})
export class TranscriptionOverviewComponent implements OnInit {

  transcriptions!: Transcription[];

  constructor(private transcriptionService: TranscriptionService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.transcriptionService.getTranscriptions().then(transcriptions => {
      this.transcriptions = transcriptions;
    });
  }

  openMedicationDialog(medicationId: string): void {
    this.dialog.open(MedicationDialogComponent, {
      panelClass: 'container',
      autoFocus: false,
      restoreFocus: false,
      data: {medicationId}
    });
  }
}
