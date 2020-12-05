import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Shared/icategory';
import { CategoryFromAPIService } from 'src/app/Services/category-from-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

catList:ICategory[];

  constructor(
    private prdService: CategoryFromAPIService
    ,private router: Router
  ) { }

  ngOnInit(): void {
    this.prdService.getAllCat().subscribe(
      (response) => {
        console.log(response);
        this.catList = response;
      },
      (err) => {console.log(err); }
    );
    console.log('After Subscribe....');

  }

}
