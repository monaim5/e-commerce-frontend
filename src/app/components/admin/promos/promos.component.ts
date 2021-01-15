import {Component, OnDestroy, OnInit} from '@angular/core';
import {Promo, PromoType} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../../core/services/product.service';
import {MatDialog} from '@angular/material/dialog';
import {SavePromoComponent} from '../save-promo/save-promo.component';
import {SavePromoTypeComponent} from '../save-promo-type/save-promo-type.component';

const dialogsComponentsMapper = {
  promo: SavePromoComponent,
  promoType: SavePromoTypeComponent
};

@Component({
  selector: 'app-promo',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit, OnDestroy {
  promoTypes: PromoType[];
  promos: Promo[];

  promoSettings = {
    mode: 'external',
    columns: {
      id: {title: 'ID', type: 'number'},
      title: {title: 'Title'},
      startDate: {title: 'Start Date'},
      endDate: {title: 'End Date', type: 'Date'},
      discountAmount: {title: 'Discount Amount'},
      promoType: {title: 'Promo Type'}
    },
    edit: {editButtonContent: 'Edit'},
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
    this.promoService.getAll().subscribe(data => {
      this.promos = data;
      console.log(this.promos);
    });

    this.promoService.getTypes().subscribe(data => {
      this.promoTypes = data;
    });
  }

  ngOnDestroy(): void {
    console.log('promos destroyed');
  }

  openDialog(dialog, data?): void {
    const dialogRef = this.dialog.open(
      dialogsComponentsMapper[dialog],
      {
        width: '80%',
        minWidth: 600,
      data: {data: data || null}
    });

    dialogRef.afterClosed().subscribe(stat => {
      if (stat === true) {this.snackBar.open('success', '', {duration: 3000}); }
      if (stat === false) {this.snackBar.open('error', '', {duration: 3000}); }
      this.refresh(dialog);
    });
  }

  createOrEditPromo(event?: any): void {
    this.openDialog('promo', event?.data);
  }

  createOrEditPromoType(event?: any): void {
    this.openDialog('promoType', event?.data);
  }

  deletePromo(event): void {
    const id = event.data.id;
    this.promoService.delete(id).subscribe(
      () => {
        this.refresh('promo');
        this.snackBar.open('success', '', {duration: 3000});
      },
      () => this.snackBar.open('error', '', {duration: 3000}));
  }

  deletePromoType(event): void {
    const id = event.data.name;
    this.promoService.deletePromoType(id).subscribe(
      () => {
        this.refresh('promoType');
        this.snackBar.open('Success:', '', {duration: 3000}); },
      () => this.snackBar.open('Error:', 'Detach all promos from this promo type', {duration: 3000}));
  }

  refresh(s): void {
    switch (s) {
      case 'promo':
        this.promoService.getAll().subscribe(data => {this.promos = data; });
        break;
      case 'promoType':
        this.promoService.getTypes().subscribe(data => {this.promoTypes = data; });
        break;
    }
  }
}
