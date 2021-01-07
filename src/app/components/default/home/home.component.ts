import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../../core/services/product.service';
import {ProductResponse} from '../../../core/models/server-response';
import {Subscribable, Subscription} from 'rxjs';
import {Product} from '../../../core/models/product.model';
import {PhotoService} from '../../../core/services/photo.service';
import {HasSidenav} from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, HasSidenav {
  @Input() sidenavToggleEvent;
  sidenavOpened = true;
  products: Product[];
  productSubscription: Subscription;

  constructor(private productService: ProductService,
              // private cartService: CartService,
              private photoService: PhotoService,
              private router: Router) { }
  ngOnInit(): void {
    this.productSubscription = this.productService.getAll().subscribe((data: Array<Product> ) => {
      this.products = data;
      console.log(this.products);
    });
  }
  AddProduct(id: number): void {
  //   this.cartService.AddProductToCart(id);
  }
  selectProduct(id: number): void{
    this.router.navigate(['/product', id]).then();
  }
  getFirstPhoto(p: Product): string {
    return this.photoService.getFirstPhoto(p.id);
  }
  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
