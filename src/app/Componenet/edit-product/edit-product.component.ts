import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/iproduct';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/Shared/icategory';
import { CategoryFromAPIService } from 'src/app/Services/category-from-api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  prd:IProduct;
  prdID:number;
  CatgoryList:ICategory[];
  constructor(
     private prdService: ProductFromAPIService
    ,private router: Router
    ,private activeRoute:ActivatedRoute
    ,private catServ:CategoryFromAPIService

     ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params =>{
      this.prdID=Number(params.get('pid'));
      this.getProductByID(this.prdID);
      });

      this.catServ.getAllCat().subscribe(
        (response) => {
          console.log(response);
          this.CatgoryList = response;
        },
        (err) => {console.log(err); }
      );
  }

  private getProductByID(prdID){
    this.prdService.getProductById(Number(prdID)).subscribe(
      (response) => {
        console.log(response);
        this.prd = response;
      },
      (err) => {console.log(err); }
    );
    console.log(prdID);
  }

  editProduct()
  {
    this.prdService.editProduct(this.prdID , this.prd).subscribe(
res =>{
  this.router.navigateByUrl('/Product');
  console.log(res);
      },
err =>{console.log(err);}
    );
  }

}
