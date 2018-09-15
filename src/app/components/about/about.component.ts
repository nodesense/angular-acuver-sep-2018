// about.component.ts
import { Component,
          OnInit,
          ViewChild,
          ElementRef
        } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  members: string[] = [
        'Venkat',
        'Mohan'
  ];
  showMembers = true;

  // ElementRef is a wrapper for DOM element
  // <input #personName />
  @ViewChild('personName')
  personElement: ElementRef;

  // <p #p1> Para </p>
  @ViewChild('p1')
  p1Element: ElementRef;

  // Step 1: No View Initialized, no ViewChild
  constructor() { }

  // Step 2: View is initialized in browser
  // here All ViewChild are resolved

  // Step 3: Called after view initialized in browser
  
  ngOnInit() {
    // elementRef is wrapper for dom element
    // nativeElement is a REAL DOM element
    this.p1Element
        .nativeElement.textContent = 'Enter Name';

    this.personElement
        .nativeElement.focus();
  }

  remove(index: number) {
    this.members.splice(index, 1);
  }
  add(name: string) {
    this.members.push(name);
  }
  empty() {
    this.members = [];
  }
}
