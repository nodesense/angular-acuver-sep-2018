// cart.module.ts

import { AuthGuard } from './../shared/guards/auth.guard';
import { SharedModule } from './../shared/shared.module';

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
    path: '', // for lazy loading
    //    path: 'cart',
    component: CartComponent
  },
  {
    // path: 'cart/checkout',
    path: 'checkout', // for lazy loading
    component: CheckoutComponent,
    canDeactivate: [SaveAlertGuard],
    canActivate: [AuthGuard]
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
