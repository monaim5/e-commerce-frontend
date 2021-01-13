import {Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {Product} from '../../../core/models/product.model';
import {Observable} from 'rxjs';
import {Promo, promoFormFields} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {FormControl} from '@angular/forms';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-promo',
  templateUrl: './save-promo.component.html',
  styleUrls: ['./save-promo.component.css']
})
export class SavePromoComponent implements OnInit, OnDestroy {

  @ViewChild('promoForm') promoForm: DynamicFormComponent;
  promoProducts: Product[] = [];
  searchProductsObservable: Observable<Product[]>;
  promo: Promo;
  promoFields;
  searchField = new FormControl();
  getProductName = (prod?) => prod?.name;

  constructor(@Inject(MAT_DIALOG_DATA) public promoData: any | null,
              private productService: ProductService,
              private promoService: PromoService,
              private dialogRef: MatDialogRef<SavePromoComponent>) { }

  ngOnInit(): void {
    this.promo = this.promoData.data;
    this.promoService.getTypes().subscribe(data => {
      this.promoFields = promoFormFields(data, this.promo);
    });

    if (this.promo) {
      this.promoProducts = this.promo.products;
    }

    this.searchProductsObservable = this.searchField.valueChanges.pipe(
      debounceTime(100),
      switchMap(term => this.productService.getByTitleContains(term || 'a')
        .pipe(map(prodList => {
            return prodList.filter(prod => !this.prodOnPromoProducts(prod));
          })
        )),
    );
  }

  ngOnDestroy(): void {
  }

  submitPromo(): void {
    const promoPayload: Promo = this.promoForm.value;
    promoPayload.products = this.promoProducts.map(prod => ({
      id: prod.id, name: null, photos: null, available: null, quantity: null, description: null, designation: null,
      categoryId: null, price: null, sales: null
    }));

    this.promoService.create(promoPayload).subscribe(
      () => this.dialogRef.close(true),
      () => this.dialogRef.close(false)
    );
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
