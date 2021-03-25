import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../core/services/category.service";
import {Category} from "../../../core/models/category.model";
import {Payload} from "../../../core/models/payload.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Payload<Category[]>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

}
