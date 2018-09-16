// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

import {Observable} from 'rxjs';

// FIXME: dynamic items are not sorted
// after page is initialized

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  amount: number;
  
  totalItems$: Observable<number>;

  cartItems$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    console.log('Cart created');

    // this.amount = cartService.amount; // number/value

    this.totalItems$ = cartService.totalItems$; 

    this.cartItems$ = cartService.cartItems$; // object/ref
  }

  ngOnInit() {
    console.log('cart ngOnInit enter');
    // subscribe (amount => ) is passed in next()
    this.cartService
        .amount$
        .subscribe( amount => { // callback
          console.log('Cart Amount Subscribe', amount);
          this.amount = amount;
        });

      console.log('cart ngOnInit exit');
  }

  add() {
    const id = Math.ceil(Math.random() * 10000);
    const price = Math.ceil(Math.random() * 100);

    const item = new CartItem(id,
                              `Product ${id}`,
                              price,
                              1
                              );

    this.cartService.addItem(item);
  }

  remove(id: number) {
    this.cartService.removeItem(id);
    // todo
  }

  empty() {
    this.cartService.empty();
  }

}
