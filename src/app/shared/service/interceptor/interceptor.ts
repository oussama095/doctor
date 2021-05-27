import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token === null) {
      req = req.clone({url: `${environment.BackEndUrl}${req.url}`});
    } else {
      // @ts-ignore
      req = req.clone({
        url: `${environment.BackEndUrl}${environment.BaseURLAPI}${req.url}`,
        headers: req.headers.set('Authorization', token)
      });
    }
    return next.handle(req);
  }
}
