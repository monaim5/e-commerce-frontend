import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../core/models/product.model";

@Component({
  selector: 'app-promo-details',
  templateUrl: './promo-details.component.html',
  styleUrls: ['./promo-details.component.css']
})
export class PromoDetailsComponent implements OnInit {

  @Input() product: Product;
  @Input() discount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
