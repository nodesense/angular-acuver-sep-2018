import { AuthService } from './../services/auth.service';
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot, 
          Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('auth guard');
      console.log('url ', state.url);
      console.log('params ', next.params);

      if (this.authService.isAuth) {
        return true;
      }

      this.authService.nextUrl = state.url;
      
      this.router.navigateByUrl('/auth/login');

      return false;
  }
}
