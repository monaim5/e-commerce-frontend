import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../core/services/product.service";
import {Product} from "../../../core/models/product.model";

@Component({
  selector: 'app-hotpicks',
  templateUrl: './hotpicks.component.html',
  styleUrls: ['./hotpicks.component.css']
})
export class HotpicksComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getHotPicks().subscribe(data => {
      this.products = data;
    });
  }

}
