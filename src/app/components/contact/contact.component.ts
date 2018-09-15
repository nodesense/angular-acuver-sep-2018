import { AddressComponent } from './../../shared/components/address/address.component';
import { Address } from './../../shared/models/address';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  address: Address = {
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: 560001
  };

  branchAddress: Address = {
    city: 'Chennai',
    state: 'Tamilnadu'
  };

  @ViewChild('address1')
  address1: AddressComponent;

  constructor() { }

  ngOnInit() {
  }

  // to be invoked from child component
  contactHandler(addr: Address) {
    alert(JSON.stringify(addr));
  }

  getDataFromChild() {
    alert(this.address1.getData());
  }
}
