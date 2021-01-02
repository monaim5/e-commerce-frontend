import { Component, OnInit } from '@angular/core';
import {Product} from "../../../core/models/product.model";

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  products: Product[];
  constructor() { }
  ngOnInit(): void {
    // TODO get the real products
    this.products = [];
  }

}
