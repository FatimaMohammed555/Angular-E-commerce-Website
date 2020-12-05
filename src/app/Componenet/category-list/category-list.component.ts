import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Shared/icategory';
import { CategoryFromAPIService } from 'src/app/Services/category-from-api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  CatgoryList: ICategory[] = [];
  catIDInParent: number;

  constructor(private prdService: CategoryFromAPIService) { 
    this.catIDInParent = 1;
  }

  ngOnInit(): void {
    this.prdService.getAllCat().subscribe(
      (response) => {
        console.log(response);
        this.CatgoryList = response;
      },
      (err) => {console.log(err); }
    );

  }

}
