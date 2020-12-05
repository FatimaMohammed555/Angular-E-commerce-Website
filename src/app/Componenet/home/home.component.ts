import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/iproduct';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { Subscription } from 'rxjs';
import { CategoryFromAPIService } from 'src/app/Services/category-from-api.service';
import { ICategory } from 'src/app/Shared/icategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prdList: IProduct[];
  ProductName:string;
  UnitPrice:number;
  min:number ;
  max:number;
  OrderedList:IProduct[];
  
  CatgoryList:ICategory[];

  private subscriptions: Subscription[] = [];

  constructor(
    private prdService: ProductFromAPIService
    ,private cartSevice : CartService
    ,private catServ:CategoryFromAPIService

  ) { }

  ngOnInit(): void {
    this.prdService.getAllProds().subscribe(
      (response) => {
        console.log(response);
        this.prdList = response;
      },
      (err) => {console.log(err); }
    );

    this.catServ.getAllCat().subscribe(
      (response) => {
        console.log(response);
        this.CatgoryList = response;
      },
      (err) => {console.log(err); }
    );

  }

  //get all category
GetAllCategory()
{
  alert("asd");
   this.catServ.getAllCat().subscribe(
    (response) => {
      console.log(response);
      this.CatgoryList = response;
    },
    (err) => {console.log(err); }
  );

}

  change(catid:number)
{
  if(catid==0)
  {
    this.catServ.getAllCat().subscribe(
    (response) => {
      console.log(response);
      this.CatgoryList = response;
    },
    (err) => {console.log(err); }
  );


  }
  else
  {
  this.prdService.getProductsByCatID(catid).subscribe
  (
    res => {this.prdList=res },
    err => {console.log(err); }
  );
  }

}

  Search(){
    if(this.ProductName != "")
    {
      this.prdList=this.prdList.filter(res =>{
        return res.ProductName.toLocaleLowerCase().match(this.ProductName.toLocaleLowerCase());
      
      });
      //console.log("prod List is :" + this.prdList);
    }else if(this.ProductName == "")
    {
this.ngOnInit();
    }

  } 

  SearchByPrice(min?:number , max?:number)
  {
    this.prdService.getProductsByPrice(min,max).subscribe
    (
      res => {this.prdList=res },
      err => {console.log(err); }
    );
      
  }

  pushProductToCart(prod)
  {
    this.OrderedList = this.cartSevice.GetProductFromCart();
    if(this.OrderedList == null)
    {
      this.OrderedList = [];
      this.OrderedList.push(prod);
      console.log(`Array Elements are ${this.OrderedList}`);
      this.cartSevice.AddProductToCart(this.OrderedList);
      console.log(`cart is ${this.OrderedList}`);
    }
    else
    {
      var id = this.OrderedList.find(p=>p.ID == prod.ID);
      if(id)
      {
        prod.neededQuantity ++ ;
      }
      else
      {
        this.OrderedList.push(prod);
        console.log(`Array Elements are ${this.OrderedList}`);
        this.cartSevice.AddProductToCart(this.OrderedList);
        console.log(`cart is ${this.OrderedList}`);
      }

    }
  }

  /*
  array.filter( return x=>x.min == min && x.max == max)
*/
  
//const filterdByPrice
/* SearchPrice(){
  this.prdList = this.prdList.filter(prod=>prod.UnitPrice >= this.minPrice && prod.UnitPrice <= this.maxPrice);
  console.log(this.prdList);
  console.log("prod List is :" + this.prdList);
  //this.prdList= filterdByPrice;
  } */

}
