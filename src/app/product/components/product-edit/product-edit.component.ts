import { Observable } from 'rxjs';
import { Product } from './../../models/product';
// product-edit.component.ts
import { Component, OnInit } from '@angular/core';

import {
  ActivatedRoute, // to read url data
} from '@angular/router';
import { Brand } from '../../models/brand';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  brands$: Observable<Brand[]>;

  constructor(private route: ActivatedRoute, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log('id is ', id);

    if (id) {
       this.productService.getProduct(id)
           .subscribe ( product => {
              this.product = product;
           });
           // TODO: erors, 404
    }

    this.brands$ = this.productService.getBrands();

  }

  saveProduct() {
    this.productService.saveProduct(this.product)
        .subscribe ( savedProduct => {

        });
  }

}
