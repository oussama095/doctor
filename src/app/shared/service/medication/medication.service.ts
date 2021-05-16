import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Medication} from '../../model/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  private baseUrl = 'medication';

  constructor(private http: HttpClient) {
  }

  getPatientAllMedication(patientId: string): Promise<Medication[]> {
    return this.http.get<Medication[]>(this.baseUrl + '/' + patientId).toPromise().then((medications) => medications);
  }
}
