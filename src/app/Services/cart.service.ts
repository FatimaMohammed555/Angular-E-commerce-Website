import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Shared/iproduct';
import { IOrder } from '../Shared/iorder';
import { IProductDTO } from '../Shared/iproduct-dto';
import { OrderFromAPIService } from './order-from-api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
prodDTO:IProductDTO;


  constructor(private httpClient : HttpClient
    ,private ordService:OrderFromAPIService ) { }

  //prodArray is javascript object 
//JSON.stringify(prodArray)-->to convert (javascript) object to (Json) object
AddProductToCart(prodArray:any)
{
  localStorage.setItem('productAdded',JSON.stringify(prodArray));
}

//JSON.parse()-->to convert JSON to javascript object
  GetProductFromCart()
  {
    return JSON.parse(localStorage.getItem('productAdded'));
  }

  removeProductsFromCart()
  {
    //console.log(localStorage.removeItem('productAdded'));
    return localStorage.removeItem('productAdded');
  }

  CheckOut()
  {

    let order:IOrder={
      CustomerID:'',
      productList:[]
    };
    
    let prodlst:IProduct[]=[];
    prodlst = this.GetProductFromCart();
    console.log('test');
    //order.productList=[];

    for(let product of prodlst)
    {
      order.productList.push({
         ID:product.ID,
         NeededQuantity:product.NeedQuantity
      });

      //product.QuantityPerUnit=product.QuantityPerUnit - product.NeedQuantity;
    } 
    console.log(order);
this.ordService.addOrder(order).subscribe(
  res => { console.log(res);},
err => { console.log(err); })
  }


}



