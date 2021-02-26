import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../core/models/product.model';
import {ProductService} from '../../../core/services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.productService.getAll().subscribe(data => {
        this.products = data;

      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
