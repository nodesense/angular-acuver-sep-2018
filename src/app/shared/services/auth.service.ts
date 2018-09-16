import { environment } from './../../../environments/environment.prod';
// auth.service.ts
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuth);

  nextUrl: string;
  token: string;

  constructor(private router: Router, 
              private http: HttpClient) { }

  isAuthenticated(): boolean {
    return this.isAuth;
  }

  login(username: string, password: string) {
    // TODO: login with real service

    const data = {
      username: username,
      password: password
    };

    this.http.post(`${environment.authEndPoint}`, data)
             .subscribe ( (result: any) => {
                console.log('result ', result);
                this.token = result.token;
                this.isAuth = true;
                this.isAuth$.next(this.isAuth);
            
                this.router.navigateByUrl(this.nextUrl || '/');
                this.nextUrl = '';
             });
  }

  logout() {
    this.isAuth = false;
    this.isAuth$.next(this.isAuth);
    this.token = '';
  }
}
