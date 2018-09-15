import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CartComponent,
      CartSummaryComponent,
      CheckoutComponent],

  exports: [
    CartComponent
  ]
})
export class CartModule { }
