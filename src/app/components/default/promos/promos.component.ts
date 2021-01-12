import {Component, OnDestroy, OnInit} from '@angular/core';
import {Promo} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit, OnDestroy {
  promos: Promo[];
  subscriptions: Subscription[] = [];

  constructor(private promoService: PromoService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.promoService.getAll().subscribe(data => {
        this.promos = data;
        console.log(this.promos);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
