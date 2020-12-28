import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../core/services/product.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products;
  public categories;
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd){
        console.log(val.url);
      }
    });
  }

  ngOnInit(): void {

    this.productService.getAll().subscribe(data => {
      this.products = data;
      console.log(this.products);
    }, error => {
      console.log(error);
    });
    this.categoryService.getAll().subscribe(data => {
      this.categories = data._embedded.categories;
      console.log(this.categories);
    });
  }

}
