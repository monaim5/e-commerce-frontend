import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../core/models/product.model";
import {ProductService} from "../../../core/services/product.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() category: string;
  @Input() bg: string;
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getByCategory(this.category).subscribe(data => {
      this.products = data;
    });
  }
  applyStyle(): any{
    return;
  }

}
