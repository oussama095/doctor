import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../../schema/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) {
  }

  getAllPatients(): Promise<Patient[]> {
    const reqUrl = 'patients';
    return this.http.get<Patient[]>(reqUrl).toPromise().then((patients) => patients);
  }

  getPatient(patientID: string): Promise<Patient> {
    const reqUrl = `patient`;
    return this.http.get<Patient>(reqUrl, {params: {id: patientID}}).toPromise().then((patient) => patient);
  }

  updatePatient(patient: Patient): Promise<Patient> {
    const reqUrl = `patient/${patient.id}`;
    console.log(patient);
    return this.http.put<Patient>(reqUrl, patient).toPromise().then((patientUpdated) => patientUpdated);
  }


}
