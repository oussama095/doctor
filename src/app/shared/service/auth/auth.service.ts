import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Login {
  email: string;
  password: string;
  rePassword?: string;
}

interface RegisterResponse {
  token: string;
  patientId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'auth/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  login(credentials: Login): Promise<boolean> {
    return this.http.post<any>(this.baseUrl + 'login', credentials, {observe: 'response'}).toPromise().then((res: any) => {
      localStorage.setItem('token', res.headers.get('Authorization'));
      localStorage.setItem('patientId', res.headers.get('patientId'));
      return true;
    });
  }

  register(registerCredentials: Login): Promise<boolean> {
    return this.http.post<RegisterResponse>(this.baseUrl + 'register', registerCredentials).toPromise().then(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('patientId', res.patientId);
      return true;
    });
  }


  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('patientId');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
