// header.component.ts

import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../cart/services/cart.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  amount$: Observable<number>;
  isAuth$: Observable<boolean>;

  constructor(private cartService: CartService,
             private authService: AuthService,
             private router: Router) {
    this.amount$ = this.cartService.amount$;
    this.isAuth$ = this.authService.isAuth$;
   }

  ngOnInit() {
  }

  empty() {
    this.cartService.empty();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
