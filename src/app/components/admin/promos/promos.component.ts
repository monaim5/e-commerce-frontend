import {Component, OnInit, ViewChild} from '@angular/core';
import {Promo, promoFormFields, PromoType, promoTypeFormFields} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {DynamicFormComponent} from "../../shared/dynamic-form/dynamic-form.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-promo',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {
  promoTypes: PromoType[];
  promos;
  promoFields;
  promoTypeFields;

  promoSettings = {
    mode: 'external',
    columns: {
      id: {title: 'ID', type: 'number'},
      title: {title: 'Title'},
      startDate: {title: 'Start Date'},
      endDate: {title: 'End Date', type: 'Date'},
      discountAmount: {title: 'Discount Amount'},
      type: {title: 'Promo Type'}
    }
  };

  promoTypeSettings = {
    mode: 'external',
    columns: {
      name: {title: 'Name'},
      description: {title: 'Description'},
    }
  };

  @ViewChild('promoTypeForm') promoTypeForm: DynamicFormComponent;
  @ViewChild('promoForm') promoForm: DynamicFormComponent;
  createPromoComponentActive = false;
  createPromoTypeComponentActive = false;
  constructor(private promoService: PromoService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.promoService.getTypes().subscribe(data => {
      this.promoTypes = data;
      console.log(this.promoTypes);
      this.promoFields = promoFormFields(this.promoTypes);
      this.promoTypeFields = promoTypeFormFields;
    });

    this.promos = this.promoService.getAll().subscribe(data => {
      this.promos = data;
      console.log(data);
    });
  }

  submitPromo(): void{
    this.promoService.create(this.promoForm.value).subscribe(data => {
      console.log(data.status);
      this.promos.push(data);
      this.snackBar.open('Promo has been created');
    });
  }

  submitPromoType(): void {
    this.promoService.createPromoType(this.promoTypeForm.value).subscribe(data => {
      console.log(data.status);
      this.promoTypes.push(data);
      this.snackBar.open('PromoType has been created');
    });
  }

  deletePromo(event): void {
    const id = event.data.id;
    this.promoService.delete(id).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  deletePromoType(event): void {
    const id = event.data.name;
    this.promoService.deletePromoType(id).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  toggleCreatePromo(): void {
    this.createPromoComponentActive = !this.createPromoComponentActive;
  }

  toggleCreatePromoType(): void {
    this.createPromoTypeComponentActive = !this.createPromoTypeComponentActive;
  }

  onEdit(event: any): void {
    console.log(event);
  }
}
