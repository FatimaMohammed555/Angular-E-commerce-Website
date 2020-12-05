import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/iproduct';
import { Router } from '@angular/router';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { ICategory } from 'src/app/Shared/icategory';
import { CategoryFromAPIService } from 'src/app/Services/category-from-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  prd: IProduct;
  CatgoryList:ICategory[];

  constructor(
    private ProductService: ProductFromAPIService
   ,private router: Router,
   private catServ:CategoryFromAPIService

  ) { this.prd = {ID: 0, ProductName: '', QuantityPerUnit: 0, UnitPrice: 0};}

  ngOnInit(): void {
    this.catServ.getAllCat().subscribe(
      (response) => {
        console.log(response);
        this.CatgoryList = response;
      },
      (err) => {console.log(err); }
    );


  }


  //Add new product
  addProduct(){
    /* this.prd = {ID: 0, ProductName: ' TestAddFunc', QuantityPerUnit: 37, UnitPrice: 100};
    console.log(this.prd); */

       this.ProductService.addProduct(this.prd)
        .subscribe(
          res => {this.router.navigateByUrl('/Product'); },
          err => {console.log(err); }
        ); 
    }

}
