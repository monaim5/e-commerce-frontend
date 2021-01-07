import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../core/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  settings = {
    mode: 'external',
    columns: {
      id: {title: 'ID', type: 'number'},
      product: {title: 'Product'},
      price: {title: 'Price', type: 'number'},
      available: {title: 'Available'},
      quantity: {title: 'Quantity', type: 'number'},
      category: {title: 'category', type: 'string'},
    }
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  onDelete(event): void {
    const id = event.data.id;
    this.productService.delete(id).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
