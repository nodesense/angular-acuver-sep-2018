// app.component.ts
import {Component} from '@angular/core';

// decorator / meta data for angular framework
@Component({
    // custom html tag <app-root></app-root>
    selector: 'app-root',
    // View
    templateUrl: 'app.component.html',
    // scopped style
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent { // Component class
    // data model (Model)
    appTitle = 'Product App';
}