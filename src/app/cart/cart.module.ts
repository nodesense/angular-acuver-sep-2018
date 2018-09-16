import { SharedModule } from './../shared/shared.module';
// cart.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import { SaveAlertGuard } from '../shared/guards/save-alert.guard';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cart/checkout',
    component: CheckoutComponent,
    canDeactivate: [SaveAlertGuard]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    // forChild for all sub modules
    // apply route to module
    RouterModule.forChild(routes)
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
