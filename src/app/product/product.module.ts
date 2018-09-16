import { AuthGuard } from './../shared/guards/auth.guard';
// product.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {Routes, RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: 'products',
    component: ProductHomeComponent,
    // angular shall call all the guards
    // all guards are called, all should return true
    canActivate: [AuthGuard],

    // nested navigation, derive path from parent
    children: [
      {
        path: '', // /products
        component: ProductListComponent
      },
      {
        path: 'create', // /proudcts/create
        component: ProductEditComponent
      },

      {
        path: 'edit/:id', // products/edit/12345
        component: ProductEditComponent
      },
      {
        path: 'search',
        component: ProductSearchComponent
      },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductHomeComponent, ProductListComponent, ProductEditComponent, ProductSearchComponent]
})
export class ProductModule { }
