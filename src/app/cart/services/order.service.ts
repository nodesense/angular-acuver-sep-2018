// order.service.ts

import { Order } from './../models/order';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

console.log('Enviroment', environment);

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
      console.log('OrderService created');
  }

  placeOrder(order: Order): Observable<Order> {
    return this
          .http
          .post<Order> (`${environment.apiEndPoint}/api/orders`,
                          order
          );
  }
}
