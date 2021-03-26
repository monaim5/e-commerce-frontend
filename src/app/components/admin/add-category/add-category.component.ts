import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CategoryService} from '../../../core/services/category.service';
import {CategoryModel} from '../../../core/models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  form: FormGroup = CategoryModel.getFormGroup();

  constructor(private categoryService: CategoryService) { }

  submit(event: any): any {
    if (this.form.valid) {
      this.categoryService.create(this.form.value).subscribe(console.log);
    } else {
      console.log('form is invalid');
    }
  }

}
