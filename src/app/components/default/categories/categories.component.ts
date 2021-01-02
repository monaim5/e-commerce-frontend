import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../core/services/category.service";
import {Category} from "../../../core/models/category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Array<{ name: string }>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
    this.categories = [{name: 'cars'}, {name: 'clothes'}, {name: 'phones2222222222222222222222222222222222222222222'}];
  }

}
