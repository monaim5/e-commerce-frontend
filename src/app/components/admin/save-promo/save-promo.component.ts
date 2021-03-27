import {AfterViewInit, Component, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {Product} from '../../../core/models/product.model';
import {Observable} from 'rxjs';
import {Promo, PromoModel} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PhotoService} from '../../../core/services/photo.service';
import {FileUploaderComponent} from '../../shared/file-uploader/file-uploader.component';
import {PromoType} from '../../../core/models/promo-type.model';
import {DataSet} from '../../../core/models/custom.type';
import {Payload} from '../../../core/models/payload.model';

@Component({
  selector: 'app-edit-promo',
  templateUrl: './save-promo.component.html',
  styleUrls: ['./save-promo.component.css']
})
export class SavePromoComponent implements OnInit, OnDestroy {

  // @ViewChild('promoForm') promoForm: DynamicFormComponent;
  @ViewChild('fileUploader') fileUploader: FileUploaderComponent;

  form: FormGroup;
  promoProducts: Product[] = [];
  // searchProductsObservable: DataSet<Product[]>;
  // promo$: DataSet<Promo>;
  promoTypes$: DataSet<PromoType[]>;

  searchField = new FormControl();

  // formFields = PromoModel.getFormGroup;

  getProductTitle = (prod?: Product) => prod?.title;

  constructor(@Inject(MAT_DIALOG_DATA) public promoData: any | null,
              private productService: ProductService,
              private promoService: PromoService,
              public photoService: PhotoService,
              private dialogRef: MatDialogRef<SavePromoComponent>) { }

  ngOnInit(): void {
    if (this.promoData.data) {
      this.promoService.getById(this.promoData.data.id).subscribe((data: Payload<Promo>) => {
        this.form = PromoModel.getFormGroup(data?.data);
      });
    } else {
      this.form = PromoModel.getFormGroup();
    }
    this.promoTypes$ = this.promoService.getTypes();

    // this.searchProductsObservable = this.searchField.valueChanges.pipe(
    //   debounceTime(100),
    //   switchMap(term => this.productService.getByTitleContains(term || 'a')
    //     .pipe(map(prodList => prodList.filter(prod => !this.prodOnPromoProducts(prod)))))
    // );
  }

  ngOnDestroy(): void {
  }

  addProduct(): void {

  }

  deleteProduct(): void {

  }

  submitPromo(): void {

    console.log(this.fileUploader.files);

    // const action = (this.promoData.date) ? 'create' : 'update';
    // this.promoService[action](this.form.value).subscribe(
    //   (data: Payload<Promo>) => this.dialogRef.close(data),
    //     (err: Payload<null>) => this.dialogRef.close(err)
    // );



    //
    // promoPayload.products = this.promoProducts.map(prod => ({
    //   id: prod.id
    // }));
    // promoPayload.banners = this.fileUploader.files;
    //
    // if (this.promo) {
    //   this.promoService.update(this.promo.id, promoPayload).subscribe(
    //     () => this.dialogRef.close(true),
    //     () => this.dialogRef.close(false)
    //   );
    // } else {
    //   this.promoService.create(promoPayload).subscribe(
    //     () => this.dialogRef.close(true),
    //     () => this.dialogRef.close(false)
    //   );
    // }
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
