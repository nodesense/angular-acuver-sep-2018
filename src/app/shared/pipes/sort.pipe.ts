// sort.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

// {{products | sort:fieldName:sortType}}
// {{brands | sort:fieldName:sortType}}

@Pipe({
  name: 'sort',
  // pure makes the pipes to be called on every 
  // change detection cycle
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(items: any[],
            fieldName: string,
            sortType: string= 'asc'): any[] {


    console.log('sort pipe called', items);

    if (!items || !fieldName) {
      return items;
    }

    if (sortType === 'asc') {
      return  items.sort ( (left, right) => {
          if (left[fieldName] > right[fieldName]) {
            return 1;
          }

          if (left[fieldName] < right[fieldName]) {
            return -1;
          }

          return 0;
      });
    }

    // else for descending order
    return  items.sort ( (left, right) => {
      if (left[fieldName] < right[fieldName]) {
        return 1;
      }

      if (left[fieldName] > right[fieldName]) {
        return -1;
      }

      return 0;
  });
  }

}
