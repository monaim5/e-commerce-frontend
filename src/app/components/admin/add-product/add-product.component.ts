import {Component, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {FieldConfig} from '../../../shared/field.interface';
import {CategoryService} from '../../../core/services/category.service';
import {Category} from '../../../core/models/category.model';
import {map} from 'rxjs/operators';
import {Product} from '../../../core/models/product.model';
import {ProductService} from '../../../core/services/product.service';
import {PhotoService} from '../../../core/services/photo.service';
import {Photo} from '../../../core/models/photo.model';
import {Observable} from 'rxjs';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {Validators} from '@angular/forms';
import {DynamicFormInterface} from '../../shared/dynamic-form.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, DynamicFormInterface {

  productPayload: Product;
  categories?: Category[];
  fields: FieldConfig[];
  inProgressPhotos: Array<{title: string, percentage: Observable<any>}> = [];
  uploadedPhotos: Photo[] = [];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private photoService: PhotoService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
      this.initializeForm();
    });
  }

  submit(event: any): void {
    this.productPayload = this.form.value;
    this.productPayload.photos = this.uploadedPhotos;
    console.log(this.productPayload);
    this.productService.create(this.productPayload).subscribe(data => {
      console.log(data);
    });
  }

  onFileSelected(files: FileList): void {
    this.inProgressPhotos.push({
        title: files.item(0).name,
        percentage: this.photoService.upload({
          id: null,
          url: null,
          productId: null,
          title: files.item(0).name,
          file: files.item(0)
        }).pipe(map((event: HttpEvent<any>) => {
            switch (event.type) {
              case(HttpEventType.UploadProgress):
                return Math.round((event.loaded / event.total) * 100);
              case (HttpEventType.Response):
                console.log(event.body);
                this.uploadedPhotos.push(event.body);
                return 100;
            }})),
      }
    );
  }

  initializeForm(): void {
    this.fields = [
      {
      name: 'name',
      type: 'input',
      inputType: 'text',
      label: 'Name',
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        }
      ]},
      {
        name: 'categoryId',
        type: 'select',
        label: 'Category',
        value: '0',
        options: this.categories.map(cat => ({value: cat.id.toString(), viewValue: cat.name}))
      },
      {
        name: 'designation',
        type: 'input',
        inputType: 'text',
        label: 'Designation',
        value: ''
      },
      {
        name: 'description',
        type: 'textarea',
        label: 'Description',
        value: ''
      },
      {
        name: 'price',
        type: 'input',
        inputType: 'number',
        label: 'Price',
        value: 0
      },
      {
        name: 'quantity',
        type: 'input',
        inputType: 'number',
        label: 'Quantity',
        value: 0
      },
      {
        name: 'available',
        type: 'checkbox',
        label: 'Available',
        value: true
      },
      {
        type: 'button',
        label: 'Save',
        inputType: 'submit'
      }
    ];
  }

}
