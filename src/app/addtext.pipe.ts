import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtext'
})
export class AddtextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    return value;
  }

}
