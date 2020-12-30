import { Component, OnInit } from '@angular/core';
import {Product} from "../../core/models/product.model";

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  products: Product[];
  constructor() { }
  ngOnInit(): void {
    this.products = [
      {
        id: 1, name: 'product name', photos: [{id: 12, title: 'photo title 1', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 2, name: 'product name', photos: [{id: 13, title: 'photo title 2', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 3, name: 'product name', photos: [{id: 14, title: 'photo title 3', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }, {
        id: 4, name: 'product name', photos: [{id: 15, title: 'photo title 4', url: '../../../assets/miniature.jpg'}]
      }
    ];
  }

}
