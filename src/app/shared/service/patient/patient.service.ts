import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  serviceBaseUrl = 'patient';
  // @ts-ignore
  patientId: string = localStorage.getItem('patientId').toString();


  constructor(private http: HttpClient) {
  }

  getAllPatients(): Promise<Patient[]> {
    return this.http.get<Patient[]>(this.serviceBaseUrl + '/all').toPromise().then((patients) => patients);
  }

  getPatient(patientId?: string): Promise<Patient> {
    if (!patientId) {
      patientId = this.patientId;
    }
    return this.http.get<Patient>(this.serviceBaseUrl, {params: {patientId}}).toPromise().then((patient) => patient);
  }

  updatePatient(patient: Patient): Promise<Patient> {

    return this.http.put<Patient>(this.serviceBaseUrl, patient).toPromise().then((patientUpdated) => patientUpdated);
  }

  deletePatient(patient: Patient): Promise<void> {
    return this.http.request<boolean>('delete', this.serviceBaseUrl, {body: patient}).toPromise().then();
  }

}
