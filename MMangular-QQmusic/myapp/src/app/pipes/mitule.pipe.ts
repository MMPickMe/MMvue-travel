import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mitule'
})
export class MitulePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
