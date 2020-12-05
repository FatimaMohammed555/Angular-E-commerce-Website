import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { CartService } from 'src/app/Services/cart.service';
import { OrderFromAPIService } from 'src/app/Services/order-from-api.service';
import { IOrder } from 'src/app/Shared/iorder';
import { IProductDTO } from 'src/app/Shared/iproduct-dto';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  prd: IProduct;
  count :number = 0;
  OrderedList : IProduct[]=[];
  chklist : IProduct[];
  TotalPrice:any;

  orderList:IOrder;
  prodDTO:IProductDTO;

  constructor(private activeRoute: ActivatedRoute  
             ,private prdService : ProductFromAPIService
             , private cartService :CartService 
             , private router : Router
             ,private orderService:OrderFromAPIService
            ) 
             {
              this.prd = {ID : 0 , ProductName : "" , UnitPrice : 0 , QuantityPerUnit : 0 , NeedQuantity : 0 ,Image:"" }
              //this.TotalPrice=0; 
            }

  ngOnInit(): void {
    this.OrderedList = this.cartService.GetProductFromCart();
    console.log(this.OrderedList);
    for(let i of this.OrderedList)
    {
      i.NeedQuantity = 1;
    }

  }

  removeProducts()
  {
    this.cartService.removeProductsFromCart();
    this.router.navigateByUrl('/Cart');

  }

  removeOnePRoduct(pid:number)
  {
    const One = this.OrderedList.findIndex(i=>i.ID === pid);
    this.OrderedList.splice(One,1);
    this.router.navigateByUrl('/Cart');
  }

  checkout()
  {
    this.cartService.CheckOut();
  }


}
