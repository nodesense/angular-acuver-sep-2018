// checkout.component.ts
import { Order } from './../../models/order';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { IDataSave } from '../../../shared/models/idata-save';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  // OrderService is private to checkout component
  // created for every checkout comp instance
  providers: [
    OrderService
  ]
})
export class CheckoutComponent implements OnInit, IDataSave {
  order: Order = new Order();

  saved = false;


  constructor(private cartService: CartService, 
              private orderService: OrderService) { 
    this.order.name = 'Your name';
    this.order.email = 'you@example.com';

    console.log('CheckoutComponent created');
  }

  ngOnInit() {
  }

  placeOrder() {
    this.order.cartItems = this.cartService.cartItems;
    this.order.amount = this.cartService.amount;
    
    // alert(JSON.stringify(this.order));

    this.orderService
      .placeOrder(this.order)
      .subscribe ( savedOrder => {
        // alert(JSON.stringify(savedOrder));
        this.saved = true;
      });

  }

  isSaved() {
    return this.saved;
  }

  resetOrder() {
    this.order = new Order();
  }

}
