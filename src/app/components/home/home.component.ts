import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  counter = 0;
  show = true;

  constructor() { }

  ngOnInit() {
  }

  increment(e: Event) {
    console.log('Event captured ', e);
    this.counter++;
  }

  onFocus(e: Event) {
    console.log('focus ', e);
  }

  onBlur(e: Event) {
    console.log('blur ', e);
  }

}

