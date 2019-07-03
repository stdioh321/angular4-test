import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showOnConsole'
})
export class ShowOnConsolePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if (arguments[1]) {
      return value;
    } else {
      return null;
    }
  }

}
