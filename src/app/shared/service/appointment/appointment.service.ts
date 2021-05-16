import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  basicReqUrl = 'appointment/';

  constructor(private http: HttpClient) {
  }

  getAppointments(patient: string): Promise<Appointment[]> {
    return this.http.get<Appointment[]>(this.basicReqUrl + patient).toPromise().then((appointments) => appointments);
  }

  deleteAppointment(appointmentId: string): Promise<any> {
    return this.http.delete<any>(this.basicReqUrl + appointmentId).toPromise().then();
  }
}
