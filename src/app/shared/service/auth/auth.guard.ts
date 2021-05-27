import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin(route.url);
  }

  checkLogin(url: UrlSegment[]): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      if (url[0].path === 'auth') {
        return this.router.parseUrl('/home');
      }
      return true;
    } else {
      if (url[0].path === 'auth') {
        return true;
      }
      return this.router.parseUrl('/auth/login');
    }
  }
}
