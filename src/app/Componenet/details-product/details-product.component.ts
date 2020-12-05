import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Shared/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { ProductFromAPIService } from 'src/app/Services/product-from-api.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  prd: IProduct;

  constructor(
              private activeRoute: ActivatedRoute
    ,         private router: Router
    ,         private prdServiceFrmAPI: ProductFromAPIService
    ,         private location: Location
  ) { }

  goBack(){
    this.location.back();
  }

  ngOnInit(): void {
    let prdID: number;
    this.activeRoute.paramMap.subscribe(params => {
      prdID = Number(params.get('pid'));
      this.getProductByID(prdID);
    });
  }

  private getProductByID(prdID){
    this.prdServiceFrmAPI.getProductById(Number(prdID)).subscribe(
      (response) => {
        console.log(response);
        this.prd = response;
      },
      (err) => {console.log(err); }
    );
    console.log(prdID);
  }


}
