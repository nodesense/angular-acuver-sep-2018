// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

// products | filter:'price':'eq':300
// products | filter:'price':'gt':200
// products | filter:'year':'eq':2010

// brands | filter:'country':'eq':'IN'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[],
            fieldName: string,
            predicate: string,
            expected: number): any[] {

// if one of the input params not available, 
// return items as it is, without filtering
if (!items || !fieldName || !predicate || !expected) {
return items;
}

if (predicate === 'gt') {
// product['price']> 300 
// return sub list of items, where value > expected
  return items.filter (item => item[fieldName] > expected);
}


if (predicate === 'lt') {
// product['price'] < 300 
// return sub list of items, where value < expected
return items.filter (item => item[fieldName] < expected);
}

return items.filter (item => item[fieldName] == expected);
}

}
