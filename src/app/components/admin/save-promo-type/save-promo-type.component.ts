import {Component, Inject, Injector, OnInit, ViewChild} from '@angular/core';
import {DynamicFormComponent} from '../../shared/dynamic-form/dynamic-form.component';
import {promoTypeFormFields} from '../../../core/models/promo.model';
import {FieldConfig} from '../../../shared/field.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PromoService} from '../../../core/services/promo.service';
import {PromoType} from '../../../core/models/PromoType.model';

@Component({
  selector: 'app-save-promo-type',
  templateUrl: './save-promo-type.component.html',
  styleUrls: ['./save-promo-type.component.css']
})
export class SavePromoTypeComponent implements OnInit {
  promoType: PromoType;
  promoTypeFields: FieldConfig[];
  @ViewChild('promoForm') promoTypeForm: DynamicFormComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public promoTypeData: any | null,
              private promoService: PromoService,
              private dialogRef: MatDialogRef<SavePromoTypeComponent>) { }

  ngOnInit(): void {
    this.promoType = this.promoTypeData.data;
    this.promoTypeFields = promoTypeFormFields(this.promoType);
  }

  submitPromoType(): void {
    const promoTypePayload: PromoType = this.promoTypeForm.value;
    this.promoService.createPromoType(promoTypePayload).subscribe(
      () => this.dialogRef.close(true),
      () => this.dialogRef.close(false)
    );
  }
}
