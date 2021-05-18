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
    if (!patientId) {
      patientId = '';
    }
    const params: HttpParams = new HttpParams().set('patientId', patientId);
    return this.http.get<Appointment[]>(this.basicReqUrl + 'blocker', {params})
      .toPromise().then((appointments: Appointment[]) => appointments);
  }

  addAppointment(patient: string, body: Appointment): Promise<Appointment> {
    return this.http.post<Appointment>(this.basicReqUrl + patient, body).toPromise().then((appointment) => appointment);
  }

  updateAppointment(appointmentId: string, body: Appointment): Promise<Appointment> {
    return this.http.put<Appointment>(this.basicReqUrl + appointmentId, body).toPromise().then((appointment) => appointment);
  }

  getAppointments(patient: string): Promise<Appointment[]> {
    return this.http.get<Appointment[]>(this.basicReqUrl + patient).toPromise().then((appointments) => appointments);
  }

  getAppointment(patient: string, appointmentId: string): Promise<Appointment> {
    const params: HttpParams = new HttpParams().set('appointmentId', appointmentId);
    return this.http.get<Appointment[]>(this.basicReqUrl + patient, {params}).toPromise().then((appointments) => appointments[0]);
  }

  deleteAppointment(appointmentId: string): Promise<any> {
    return this.http.delete<any>(this.basicReqUrl + appointmentId).toPromise().then();
  }
}
