import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {FieldConfig} from '../../../shared/field.interface';
import {CategoryService} from '../../../core/services/category.service';
import {Category} from '../../../core/models/category.model';
import {map} from 'rxjs/operators';
import {Product, productFormFields} from '../../../core/models/product.model';
import {ProductService} from '../../../core/services/product.service';
import {PhotoService} from '../../../core/services/photo.service';
import {Photo} from '../../../core/models/photo.model';
import {Observable, Subscription} from 'rxjs';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {Validators} from '@angular/forms';
import {DynamicFormInterface} from '../../shared/dynamic-form.interface';
import {FileUploaderComponent} from "../../shared/file-uploader/file-uploader.component";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy, DynamicFormInterface {

  subscriptions: Subscription[] = [];
  productPayload: Product;
  categories?: Category[];
  fields;
  inProgressPhotos: Array<{title: string, percentage: Observable<any>}> = [];

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  @ViewChild(FileUploaderComponent) fileUploader: FileUploaderComponent;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              public photoService: PhotoService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.categoryService.getAll().subscribe(data => {
        this.categories = data;
        this.fields = productFormFields(this.categories);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  submit(event: any): void {
    this.productPayload = this.form.value;
    this.productPayload.photos = this.fileUploader.files;
    this.subscriptions.push(
      this.productService.create(this.productPayload).subscribe(data => {
      })
    );
  }
}
