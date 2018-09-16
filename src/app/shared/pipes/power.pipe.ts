// power.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

// {{ n | power:m}}
// {{ 2 | power:3}} ==> 2 ^ 3 = 8
// {{ 5 | power }} ==> 5 ^ 1 = 5

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
