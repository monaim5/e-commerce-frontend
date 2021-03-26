import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PromoService} from '../../../core/services/promo.service';
import {PromoType, PromoTypeModel} from '../../../core/models/promo-type.model';
import {FormGroup} from '@angular/forms';
import {DataSet} from '../../../core/models/custom.type';
import {Payload} from "../../../core/models/payload.model";

@Component({
  selector: 'app-save-promo-type',
  templateUrl: './save-promo-type.component.html',
  styleUrls: ['./save-promo-type.component.css']
})
export class SavePromoTypeComponent implements OnInit {
  form: FormGroup;
  promoType: PromoType;

  constructor(@Inject(MAT_DIALOG_DATA) public promoTypeData: any | null,
              private promoService: PromoService,
              private dialogRef: MatDialogRef<SavePromoTypeComponent>) { }

  ngOnInit(): void {
    this.form = PromoTypeModel.getFormGroup(this.promoTypeData.data);
  }

  submitPromoType(): void {
    if (this.form.valid) {
      if (this.promoTypeData.data) {
        this.promoService.updatePromoType(this.form.value).subscribe(
          (data: Payload<PromoType>) => this.dialogRef.close(data),
          (err: Payload<null>) => this.dialogRef.close(err)
        );
      } else {
        this.promoService.createPromoType(this.form.value).subscribe(
          (data: Payload<PromoType>) => this.dialogRef.close(data),
          (err: Payload<null>) => this.dialogRef.close(err)
        );
      }
    }
  }

}
