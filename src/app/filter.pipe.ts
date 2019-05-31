import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string,propName: any) {
    console.log('filter=',filterString)
    if(value){

          if(value.length === 0 || !filterString){
            return value ;
        }

        let listItems = [];
        for(let item of value){
          if(item[propName] == filterString){
              listItems.push(item)
          }
        }
        return listItems;

    }
       
      

  }

}
