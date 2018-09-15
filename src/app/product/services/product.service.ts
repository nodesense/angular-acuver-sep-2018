// product.service.ts
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';

console.log('Enviroment', environment);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this
          .http
          .get<Product[]> (`${environment.apiEndPoint}/api/products`);
  }
}
