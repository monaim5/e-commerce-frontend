import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() height: string;
  @Input() width: string;
  @Input() fontSize: string;
  @Input() product: Product;
  @Input() promo: boolean;
  @Input() addToCart: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  applyStyle(): any {
    return {height: this.height, width: this.width};
  }

}
