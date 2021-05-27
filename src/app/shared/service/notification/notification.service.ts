import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notification} from '../../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // @ts-ignore
  patientId: string = localStorage.getItem('patientId').toString();

  constructor(private http: HttpClient) {
  }

  getAllNotificationsOfPatient(patientId?: string): Promise<Notification[]> {
    if (!patientId) {
      patientId = this.patientId;
    }
    const reqUrl = `notification/${patientId}`;
    return this.http.get<Notification[]>(reqUrl).toPromise().then((notification) => notification);
  }

  setReadNotification(notificationId: string): Promise<Notification> {
    const reqUrl = `notification/${notificationId}`;
    return this.http.put<Notification>(reqUrl, null).toPromise().then((notification) => notification);
  }
}
