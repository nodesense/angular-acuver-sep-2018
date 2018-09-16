// auth.service.ts
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuth);

  nextUrl: string;

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  login(username: string, password: string) {
    // TODO: login with real service
    this.isAuth = true;
    this.isAuth$.next(this.isAuth);

    this.router.navigateByUrl(this.nextUrl || '/');
    this.nextUrl = '';
  }

  logout() {
    this.isAuth = false;
    this.isAuth$.next(this.isAuth);
  }
}
