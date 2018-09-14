import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
