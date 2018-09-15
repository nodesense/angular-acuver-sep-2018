// address.component.ts
import { Address } from './../../models/address';
import { Component,
          OnInit,
          Input,
          Output,
          EventEmitter
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

  // child to parent communication
  // always happens through (event)
  // contactEvent is an custom event 
  // (contactEvent)
  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  contact() {
    // todo: emit event to parent
    // publish the event, parent to subscribe/event binding
    // this.address is received as $event in parent
    this.contactEvent.emit(this.address);
  }

  getData() {
    return Math.random();
  }
}
