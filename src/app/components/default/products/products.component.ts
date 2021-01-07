import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../core/services/product.service";
import {Product} from "../../../core/models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

}
