import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Appointment} from '../../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  basicReqUrl = 'appointment/';
  // @ts-ignore
  patientId: string = localStorage.getItem('patientId').toString();

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

  addAppointment(body: Appointment, patientId?: string): Promise<Appointment> {
    if (!patientId) {
      patientId = this.patientId;
    }
    return this.http.post<Appointment>(this.basicReqUrl + patientId, body).toPromise().then((appointment) => appointment);
  }

  updateAppointment(appointmentId: string, body: Appointment): Promise<Appointment> {
    return this.http.put<Appointment>(this.basicReqUrl + appointmentId, body).toPromise().then((appointment) => appointment);
  }

  getAppointments(patientId?: string): Promise<Appointment[]> {
    if (!patientId) {
      patientId = this.patientId;
    }
    return this.http.get<Appointment[]>(this.basicReqUrl + patientId).toPromise().then((appointments) => appointments);
  }

  getAppointment(appointmentId: string, patientId?: string): Promise<Appointment> {
    if (!patientId) {
      patientId = this.patientId;
    }
    const params: HttpParams = new HttpParams().set('appointmentId', appointmentId);
    return this.http.get<Appointment[]>(this.basicReqUrl + patientId, {params}).toPromise().then((appointments) => appointments[0]);
  }

  deleteAppointment(appointmentId: string): Promise<any> {
    return this.http.delete<any>(this.basicReqUrl + appointmentId).toPromise().then();
  }
}
