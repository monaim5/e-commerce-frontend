import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {FormControl} from '@angular/forms';
import {debounceTime, filter, switchMap} from 'rxjs/operators';
import {Category, CategoryModel} from "../../../core/models/category.model";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  q;
  searchController = new FormControl();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log(CategoryModel.getFormGroup());
    // this.q = this.searchController.valueChanges.pipe(
    //   debounceTime(400),
    //   filter(term => term && term.trim().length > 0),
    //   switchMap(term => this.productService.getByTitleContains(term))
    // ).subscribe(data => {
    //   console.log(data);
    // });
  }

}
