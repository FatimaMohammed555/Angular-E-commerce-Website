import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/Shared/iproduct';
import { Router } from '@angular/router';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { ICategory } from 'src/app/Shared/icategory';
import { CategoryFromAPIService } from 'src/app/Services/category-from-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prdList: IProduct[];
  searchText:any;
  CatgoryList:ICategory[];

  ProductName:string;
  QuantityPerUnit:number;
  @Input() selCatIDInChild: number;
  
  constructor(
     private prdService: ProductFromAPIService
    ,private router: Router
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
    console.log('After Subscribe....');

    this.catServ.getAllCat().subscribe(
      (response) => {
        console.log(response);
        this.CatgoryList = response;
      },
      (err) => {console.log(err); }
    );

  }
 
  Search(){
    if(this.ProductName != "")
    {
      this.prdList=this.prdList.filter(res =>{
        return res.ProductName.toLocaleLowerCase().match(this.ProductName.toLocaleLowerCase());
      });
    }else if(this.ProductName == "")
    {
this.ngOnInit();
    }

  } 
 

//get prod by catID
/* getProductsByCatID(): IProduct[]{
 return  this.prdService.getProductsByCatID(this.selCatIDInChild);
} */

change(catid:number)
{
  this.prdService.getProductsByCatID(catid).subscribe
  (
    res => {this.prdList=res },
    err => {console.log(err); }
  );
    
}

  deleteProd(prodId:number)
  {
  this.prdService.deleteProd(prodId).subscribe(
  res => {this.router.navigateByUrl('/Product'); },
  err => {console.log(err); }
  );
  }


}
