// header.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  amount$: Observable<number>;

  constructor(private cartService: CartService) {
    this.amount$ = this.cartService.amount$;
   }

  ngOnInit() {
  }

  empty() {
    this.cartService.empty();
  }

}
