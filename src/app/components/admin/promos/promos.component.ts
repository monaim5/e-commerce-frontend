import {Component, OnInit} from '@angular/core';
import {Promo, promoFormFields, PromoType, promoTypeFormFields} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../../core/services/product.service';
import {MatDialog} from '@angular/material/dialog';
import {EditPromoComponent} from '../edit-promo/edit-promo.component';

@Component({
  selector: 'app-promo',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {
  promoTypes: PromoType[];
  promos: Promo;
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
    },
    edit: {editButtonContent: 'Edit'},
    actions: {position: 'right'}
  };

  promoTypeSettings = {
    mode: 'external',
    columns: {
      name: {title: 'Name'},
      description: {title: 'Description'},
    }
  };

  constructor(private promoService: PromoService,
              private snackBar: MatSnackBar,
              private productService: ProductService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.promoService.getTypes().subscribe(data => {
      this.promoTypes = data;
      this.promoFields = promoFormFields(this.promoTypes);
      this.promoTypeFields = promoTypeFormFields;
    });

    this.promoService.getAll().subscribe(data => {
      this.promos = data;
    });
  }

  openDialog(promo?): void {
    const dialogRef = this.dialog.open(EditPromoComponent, {
      width: '80%',
      minWidth: 600,
      data: {promo: promo || null}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
  }

  toggleCreatePromoType(): void {
  }

  onEdit(event: any): void {
    this.openDialog(event.data);
  }

}
