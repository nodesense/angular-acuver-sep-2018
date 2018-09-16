// product.service.ts

import { Brand } from './../models/brand';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

// always from environment, NOT prod.ts etc
import { environment } from '../../../environments/environment';

console.log('Env', environment);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<Product[]> {
    // http.get shall publish the data after receiving from server
    return this
          .http
          .get<Product[]>(`${environment.apiEndPoint}/api/products`);
  }

  // DELETE /api/products/100

  deleteProduct(id: number): Observable<any> {
    // ` back quote, template string in ES6
    return this.http
               .delete(`${environment.apiEndPoint}/api/products/${id}`)
  }

  getBrands(): Observable<Brand[]> {
    // http.get shall publish the data after receiving from server
    // Caching 
    return this
          .http
          .get<Brand[]>(`${environment.apiEndPoint}/api/brands`);
  }

  // rxjs
  searchProducts(q: string): Observable<Product[]> {
    // http.get shall publish the data after receiving from server
    return this
          .http
          .get<Product[]>(`${environment.apiEndPoint}/api/products/?q=${q}`);
  }

  // GET /api/product/id - get single product object
  getProduct(id): Observable<Product> {
    // http.get shall publish the data after receiving from server
    return this
          .http
          .get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
  }

  /*

    to create new resource, server would generate unique id
    POST /api/products 
        {followed by json data}

    to update existing resource
    PUT  /api/products/1 
        {followed by json data}
  */
  saveProduct(product: Product):  Observable<Product> {
    if (product.id) { // this is update
      return this.http.put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,
             product // data
      );
    } else { // create
      return this.http.post<Product>(`${environment.apiEndPoint}/api/products`,
             product // data
      );
    }
  }
}