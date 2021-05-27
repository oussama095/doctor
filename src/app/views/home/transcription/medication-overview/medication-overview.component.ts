import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MedicationDialogComponent} from '../medication-dialog/medication-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Medication} from '../../../../shared/model/medication';
import {MedicationService} from '../../../../shared/service/medication/medication.service';

export interface TableData {
  name: string;
  route: string;
  drugForm: string;
  period: string;
}

@Component({
  selector: 'app-medication-overview',
  templateUrl: './medication-overview.component.html',
  styleUrls: ['./medication-overview.component.scss']
})
export class MedicationOverviewComponent implements OnInit {

  medicationsList!: Medication[];
  medications: MatTableDataSource<TableData> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'route', 'drugForm', 'period']; // TODO - v1: add status (actively taking or wfe)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private medicationService: MedicationService,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.medicationService.getPatientAllMedication().then(medications => {
      console.log(medications);
      this.medicationsList = medications;
      const data = this.formatTableData(medications);
      this.medications = new MatTableDataSource(data);
      this.medications.paginator = this.paginator;
      this.medications.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.medications.filter = filterValue.trim().toLowerCase();
    if (this.medications.paginator) {
      this.medications.paginator.firstPage();
    }
  }

  formatTableData(data: Medication[]): TableData[] {
    return data.map(element => {
      return {
        name: element.name,
        route: element.route,
        drugForm: element.drugForm,
        period: element.dose.fullPeriod,
      };
    });
  }

  openMedicationDialog(index: number): void {

    const medicationId = this.medicationsList[index].id;
    this.dialog.open(MedicationDialogComponent, {
      panelClass: 'container',
      autoFocus: false,
      restoreFocus: false,
      data: {medicationId}
    });
  }
}
