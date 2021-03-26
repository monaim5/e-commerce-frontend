import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {CategoryService} from '../../../core/services/category.service';
import {Category, CategoryModel} from '../../../core/models/category.model';
import {Product, ProductModel} from '../../../core/models/product.model';
import {ProductService} from '../../../core/services/product.service';
import {PhotoService} from '../../../core/services/photo.service';
import {Observable} from 'rxjs';
import {FileUploaderComponent} from '../../shared/file-uploader/file-uploader.component';
import {Payload} from '../../../core/models/payload.model';
import {FormGroup} from "@angular/forms";
import {DataSet} from "../../../core/models/custom.type";
import {Promo} from "../../../core/models/promo.model";
import {PromoService} from "../../../core/services/promo.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {
  form: FormGroup = ProductModel.getFormGroup();

  // subscriptions: Subscription[] = [];
  // readonly productFormFields = productFormFields;

  // productPayload: Product;
  categories$: DataSet<Category[]>;
  // fields;
  inProgressPhotos: Array<{title: string, percentage: Observable<any>}> = [];

  // @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  @ViewChild(FileUploaderComponent) fileUploader: FileUploaderComponent;
  promos$: DataSet<Promo[]>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private promoService: PromoService,
              public photoService: PhotoService) { }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAll();
    this.promos$ = this.promoService.getAll();

    // this.subscriptions.push(
    //   this.categoryService.getAll().subscribe(data => {
    //     this.categories = data;
    //     this.fields = productFormFields(this.categories);
    //   })
    // );
  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  submit(event: any): void {
    console.log(this.form.value);
    // this.productPayload = this.form.value;
    // this.productPayload.photos = this.fileUploader.files;
    // this.subscriptions.push(
    //   this.productService.create(this.productPayload).subscribe(data => {
    //   })
    // );
  }
}
