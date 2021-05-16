import {Component, OnInit, ViewChild} from '@angular/core';
import {MedicationService} from '../../../shared/service/medication/medication.service';
import {Medication} from '../../../shared/model/medication';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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

  medications: MatTableDataSource<TableData> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'route', 'drugForm', 'period']; // TODO - add status (actively taking or wfe)

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private medicationService: MedicationService) {

  }

  ngOnInit(): void {
    this.medicationService.getPatientAllMedication('51').then(medications => {
      const data = this.formatTableData(medications);
      console.log(data);
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
}
