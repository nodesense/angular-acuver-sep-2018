// address.component.ts
import { Address } from './../../models/address';
import { Component,
          OnInit,
          Input
        } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  // property binding []
  // receive input data from parent component
  @Input()
  address: Address;

  constructor() { }

  ngOnInit() {
  }

}
