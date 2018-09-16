// cart.service.ts
import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

// service objects are created lazily on need basic
// service object can be injected into component/service
// service object can be singleton/shared across application
// service object can be specific to component/multiple instance

// subject is an observable
// Subject publishes value on every next call
import {Subject} from 'rxjs';

// 1. BehaviorSubject publish value as soon as susbcribe join
//    with last known value
// 2. BehaviorSubject publishes value on every next call,
//    update last known value
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  amount: number = 0;
  totalItems: number = 0;

  // $ is convention for observable
  // amount$ is observable
  //amount$: Subject<number> = new Subject();
  //totalItems$: Subject<number> = new Subject();

  amount$: BehaviorSubject<number>;
  totalItems$: BehaviorSubject<number>;
  cartItems$: BehaviorSubject<CartItem[]>;

  constructor() {
    console.log('CartService created');
    this.amount$ = new BehaviorSubject(this.amount);
    this.totalItems$ = new BehaviorSubject(this.totalItems);
    this.cartItems$ = new BehaviorSubject(this.cartItems);
  }

  recalculate() {
    let a = 0, t = 0;
    for (const item of this.cartItems) {
      a += item.price * item.qty;
      t += item.qty;
    }

    this.amount = a;
    this.totalItems = t;

    console.log(this.amount, this.totalItems);
    // publish the amount
    this.amount$.next(this.amount);
    this.totalItems$.next(this.totalItems);

    this.cartItems$.next(this.cartItems);
  }

  addItem(item: CartItem) {
    this.cartItems.push(item);
 
    //this.cartItems = [...this.cartItems, item];

    // todo: adding same id twice should increment qty
    this.recalculate();
  }

  removeItem(id: number) {
    // todo

    const index = this.cartItems
                      .findIndex(item => item.id === id);

    if (index >= 0) {
      this.cartItems.splice(index, 1);
    }

    // this.cartItems = this.cartItems.filter(item => item.id != id);

    this.recalculate();
  }

  empty() {
    this.cartItems = [];
    // this.cartItems.splice(0, this.cartItems.length);
    this.recalculate();
  }

}
