import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {Product} from '../../../core/models/product.model';
import {Observable} from 'rxjs';
import {Promo, promoFormFields} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {FormControl} from '@angular/forms';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-promo',
  templateUrl: './edit-promo.component.html',
  styleUrls: ['./edit-promo.component.css']
})
export class EditPromoComponent implements OnInit {

  @ViewChild('promoForm') promoForm: DynamicFormComponent;
  promoProducts: Product[] = [];
  productsObservable: Observable<Product[]>;
  promoFields;
  searchField = new FormControl();
  getProductName = (prod?) => prod?.name;

  constructor(@Inject(MAT_DIALOG_DATA) public promo: any | null,
              private productService: ProductService,
              private promoService: PromoService) { }

  ngOnInit(): void {
    this.promo = this.promo.promo;
    this.promoService.getTypes().subscribe(data => {
      this.promoFields = promoFormFields(data, this.promo);
    });

    this.productsObservable = this.searchField.valueChanges.pipe(
      debounceTime(100),
      switchMap(term => this.productService.getByTitleContains(term || 'a')
        .pipe(map(prodList => {
            return prodList.filter(prod => !this.prodOnPromoProducts(prod));
          })
        )),
    );
  }

  submitPromo(): void {
    const promoPayload: Promo = this.promoForm.value;
    promoPayload.productIds = this.promoProducts.map(prod => prod.id);

    if (this.promo) {
      this.promoService.create(promoPayload).subscribe(data => {
        console.log(data);
      });
    } else {
      this.promoService.update(promoPayload).subscribe(data => {
        console.log(data);
      });
    }
  }

  prodOnPromoProducts(product: Product): boolean {
    return !!this.promoProducts.find(prod => prod.id === product.id);
  }

  onSelectProduct(event): void {
    this.searchField.setValue(null);
    this.promoProducts.push(event.option.value);
  }

  deletePromoProduct(product: Product): void {
    const productIndex = this.promoProducts.indexOf(product);
    this.promoProducts.splice(productIndex, 1);
  }
}
