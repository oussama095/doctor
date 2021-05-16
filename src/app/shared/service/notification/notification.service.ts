import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notification} from '../../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) {
  }

  getAllNotificationsOfPatient(patientId: string): Promise<Notification[]> {
    const reqUrl = `notification/${patientId}`;
    return this.http.get<Notification[]>(reqUrl).toPromise().then((notification) => notification);
  }

  setReadNotification(id: string): Promise<Notification> {
    const reqUrl = `notification/${id}`;
    return this.http.put<Notification>(reqUrl, null).toPromise().then((notification) => notification);
  }
}
