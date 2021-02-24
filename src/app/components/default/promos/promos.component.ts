import {Component, OnDestroy, OnInit} from '@angular/core';
import {Promo} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {Subscription} from 'rxjs';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Product} from "../../../core/models/product.model";

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit, OnDestroy {
  promos: Promo[];
  products: Product[];
  subscriptions: Subscription[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    nav: false,
    // autoHeight: true,
    // autoWidth: true,
    // center: true,
    // navText: ['ssssss', ''],
    responsive: {
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    }
  };

  constructor(private promoService: PromoService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.promoService.getPromoByPromoType('discount').subscribe(data => {
        this.promos = data;
        this.products = this.promos.reduce((acc, promo) => acc.concat(promo.products), []);
        console.log(this.products);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
