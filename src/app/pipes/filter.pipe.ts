import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const res = [];
    for (const recaudo of value) {
      if(recaudo.Estacion.toLowerCase().indexOf(args.toLowerCase())>-1){
        res.push(recaudo);
      };
    };
    return res;
  }

}
