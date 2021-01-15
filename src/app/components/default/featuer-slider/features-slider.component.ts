import { Component, OnInit } from '@angular/core';
import {Promo} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-featuer-slider',
  templateUrl: './features-slider.component.html',
  styleUrls: ['./features-slider.component.css']
})
export class FeaturesSliderComponent implements OnInit {

  promos: Promo[];
  images: any;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    mergeFit: true,
    nav: false,
    // navText: ['ssssss', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      },
      940: {
        items: 4
      }
    }
  };

  constructor(private promoService: PromoService) { }

  ngOnInit(): void {
    this.promoService.getAll().subscribe(data => {
      this.promos = data;
      this.images = this.promos.map(promo => ({path: promo.banners[0].url}));
    });
  }

}
