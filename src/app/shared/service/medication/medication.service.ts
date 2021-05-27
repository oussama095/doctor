import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Medication} from '../../model/medication';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  // @ts-ignore
  patientId: string = localStorage.getItem('patientId').toString();
  private baseUrl = 'medication/';

  constructor(private http: HttpClient) {
  }

  getPatientAllMedication(patientId?: string, transcriptionId?: string): Promise<Medication[]> {
    let params: HttpParams = new HttpParams();
    if (transcriptionId) {
      params = new HttpParams().set('transcriptionId', transcriptionId);
    } else {
      if (!patientId) {
        patientId = this.patientId;
        params = new HttpParams().set('patientId', patientId);
      }
    }

    return this.http.get<Medication[]>(this.baseUrl + 'all', {params}).toPromise();
  }

  getMedication(medicationId: string): Promise<Medication> {
    return this.http.get<Medication>(this.baseUrl, {params: new HttpParams().set('medicationId', medicationId)}).toPromise();
  }
}
