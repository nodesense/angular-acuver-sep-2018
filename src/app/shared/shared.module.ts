import { HighlightDirective } from './directives/highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ // private to this module
      AddressComponent,
      LikeComponent,
      PowerPipe,
      FilterPipe,
      SortPipe,
      HighlightDirective
    ],

  // list of public component, directive, pipes
  // to be used in other modules
  exports: [
    AddressComponent
  ]
})
export class SharedModule { }
