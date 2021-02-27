import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Promo} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featuer-slider',
  templateUrl: './features-slider.component.html',
  styleUrls: ['./features-slider.component.css']
})
export class FeaturesSliderComponent implements OnInit {

  promos: Promo[];
  images: any;
  customOptions: OwlOptions;
  @ViewChild('carouselContainer') carouselContainer: ElementRef;


  constructor(private promoService: PromoService) { }

  ngOnInit(): void {
    this.promoService.getAll().subscribe(data => {
      this.promos = data;
      this.images = this.promos.map(promo => ({path: promo.banners[0].url}));
    });

    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 1000,
      autoplay: true,

      margin: 10,
      stagePadding: 0,
      startPosition: 200,

      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          responsiveRefreshRate: 1
        },
        1000: {
          items: 3,
          nav: false,
          loop: false
        }
      }

      // nav: false,
      // items: 1,
      // margin: this.carouselContainer.nativeElement.offsetWidth

      // navText: ['ssssss', ''],
      // responsive: {
      //   0: {
      //     items: 1
      //   },
      //   1100: {
      //     items: 1
      //   }
      // }
      //   400: {
      //     items: 1
      //   },
      //   740: {
      //     items: 1
      //   },
      //   940: {
      //     items: 1
      //   }
      // }
    };

  }

  hello(event): void {
    console.log(this.carouselContainer);
  }
}
