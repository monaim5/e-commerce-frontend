import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Product, productFormFields} from '../../../core/models/product.model';
import {Category} from '../../../core/models/category.model';
import {FieldConfig} from '../../../shared/field.interface';
import {Observable, Subscription} from 'rxjs';
import {Photo} from '../../../core/models/photo.model';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {ProductService} from '../../../core/services/product.service';
import {CategoryService} from '../../../core/services/category.service';
import {PhotoService} from '../../../core/services/photo.service';
import {map} from 'rxjs/operators';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  currentId: number;
  product: Product;
  categories?: Category[];
  fields: FieldConfig[];
  inProgressPhotos: Array<{title: string, percentage: Observable<any>}> = [];
  uploadedPhotos: Photo[] = [];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private photoService: PhotoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.categoryService.getAll().subscribe(data => {
        this.categories = data;
      })
    );

    this.subscriptions.push(
      this.route.paramMap.subscribe(param => {
        this.currentId = +param.get('id');
      })
    );

    this.subscriptions.push(
      this.productService.getById(this.currentId).subscribe(data => {
        this.product = data;
        this.fields = productFormFields(this.categories, this.product);
      }, error => {
        console.log(error);
      })
    );
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  /*id: number;
    name: string;
    designation?: string;
    description?: string;
    price?: number;
    quantity?: number;
    available?: boolean;
    photos: Photo[];
    categoryId?: number;*/
  // initializeForm(): void {
  //   this.fields = [
  //     {
  //       name: 'name',
  //       type: 'input',
  //       inputType: 'text',
  //       label: 'Name',
  //       value: this.product.name,
  //       validations: [
  //         {
  //           name: 'required',
  //           validator: Validators.required,
  //           message: 'Name Required'
  //         }
  //       ]},
  //     {
  //       name: 'categoryId',
  //       type: 'select',
  //       label: 'Category',
  //       value: this.product.categoryId.toString(),
  //       options: this.categories.map(cat => ({value: cat.id.toString(), viewValue: cat.name}))
  //     },
  //     {
  //       name: 'designation',
  //       type: 'input',
  //       inputType: 'text',
  //       label: 'Designation',
  //       value: this.product.designation
  //     },
  //     {
  //       name: 'description',
  //       type: 'textarea',
  //       label: 'Description',
  //       value: this.product.description
  //     },
  //     {
  //       name: 'price',
  //       type: 'input',
  //       inputType: 'number',
  //       label: 'Price',
  //       value: this.product.price
  //     },
  //     {
  //       name: 'quantity',
  //       type: 'input',
  //       inputType: 'number',
  //       label: 'Quantity',
  //       value: this.product.quantity
  //     },
  //     {
  //       name: 'available',
  //       type: 'checkbox',
  //       label: 'Available',
  //       value: this.product.available
  //     },
  //   ];
  // }

  onFileSelected(files: FileList): void {
    this.inProgressPhotos.push({
        title: 'hello there bothd',
        percentage: this.photoService.upload(
          {
            id: null,
            url: null,
            productId: null,
            file: files.item(0), title: 'hello there bothd'}
          )
          .pipe(map((event: HttpEvent<any>) => {
            switch (event.type) {
              case(HttpEventType.UploadProgress):
                return Math.round((event.loaded / event.total) * 100);
              case (HttpEventType.Response):
                this.uploadedPhotos.push(event.body);
                return 100;
            }})),
      }
    );
  }

  updateProduct(): void {
    this.product = this.form.value;
    this.product.photos = this.uploadedPhotos;
    this.productService.update(this.product).subscribe(data => {
      console.log(data);
    });
  }
}
