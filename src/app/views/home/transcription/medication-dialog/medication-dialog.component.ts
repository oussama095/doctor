import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Medication} from '../../../../shared/model/medication';
import {MedicationService} from '../../../../shared/service/medication/medication.service';

@Component({
  selector: 'app-medication-dialog',
  templateUrl: './medication-dialog.component.html',
  styleUrls: ['./medication-dialog.component.scss']
})
export class MedicationDialogComponent implements OnInit {

  medication!: Medication;

  constructor(private medicationService: MedicationService,
              @Inject(MAT_DIALOG_DATA) private data: { medicationId: string }) {
  }

  ngOnInit(): void {
    this.medicationService.getMedication(this.data.medicationId).then(medication => {
      this.medication = medication;
    });

  }
}
