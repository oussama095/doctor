import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) {
  }

  getAppointments(patient: string): Promise<Appointment[]> {
    const reqUrl = 'appointment/';
    return this.http.get<Appointment[]>(reqUrl + patient).toPromise().then((appointments) => appointments);
  }
}
