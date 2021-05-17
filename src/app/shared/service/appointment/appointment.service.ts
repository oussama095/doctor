import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Appointment} from '../../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  basicReqUrl = 'appointment/';

  constructor(private http: HttpClient) {
  }

  getBlockers(patientId?: string): Promise<Appointment[]> {
    const params: HttpParams = new HttpParams();
    if (patientId) {
      params.set('patientId', patientId);
    }
    return this.http.get<Appointment[]>(this.basicReqUrl + 'blocker', {params})
      .toPromise().then((appointments: Appointment[]) => appointments);
  }

  addAppointment(patient: string, body: Appointment): Promise<Appointment> {
    return this.http.post<Appointment>(this.basicReqUrl + patient, body).toPromise().then((appointment) => appointment);
  }

  getAppointments(patient: string): Promise<Appointment[]> {
    return this.http.get<Appointment[]>(this.basicReqUrl + patient).toPromise().then((appointments) => appointments);
  }

  deleteAppointment(appointmentId: string): Promise<any> {
    return this.http.delete<any>(this.basicReqUrl + appointmentId).toPromise().then();
  }
}
