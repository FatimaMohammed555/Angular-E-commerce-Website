import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../Shared/iproduct';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(prods: IProduct[], searchText: any): IProduct[] {

    if (!prods || !searchText) {
      return prods;
    }
    
    //    searchText = searchText.toLocaleLowerCase();
  
    return prods.filter(it => {
        it.ProductName.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !==-1
       //it.toLocaleLowerCase().includes(searchText); 
    });
  }

}
