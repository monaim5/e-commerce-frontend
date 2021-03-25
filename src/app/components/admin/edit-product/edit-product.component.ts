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
  inProgressPhotos: Array<{percentage: Observable<any>}> = [];
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


  onFileSelected(files: FileList): void {
    this.inProgressPhotos.push({
        percentage: this.photoService.upload(files.item(0))
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
