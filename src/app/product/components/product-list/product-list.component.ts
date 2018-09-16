// product-list.component.ts

import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartItem } from '../../../cart/models/cart-item';
 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  fieldName: string;
  predicate: string;
  expected: number;
 

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: Product) {
    const item = new CartItem(product.id,
                              product.name,
                              product.price,
                              1);

    this.cartService.addItem(item);
  }

  deleteProduct(id: number) {
    this.productService
        .deleteProduct(id)
        .subscribe ( result => {
           // alert('product deleted');
           this.products$ = this.productService.getProducts();
        });
  }
 

}
