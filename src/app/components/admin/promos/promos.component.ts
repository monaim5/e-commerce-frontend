import {Component, OnDestroy, OnInit} from '@angular/core';
import {Promo} from '../../../core/models/promo.model';
import {PromoService} from '../../../core/services/promo.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../../core/services/product.service';
import {MatDialog} from '@angular/material/dialog';
import {SavePromoComponent} from '../save-promo/save-promo.component';
import {SavePromoTypeComponent} from '../save-promo-type/save-promo-type.component';
import {PromoType} from '../../../core/models/promo-type.model';
import {Observable} from 'rxjs';
import {Payload} from '../../../core/models/payload.model';
import {DataStat} from '../../../core/enums/data-stat.enum';
import {DataSet} from "../../../core/models/custom.type";

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
  promoTypes$: DataSet<PromoType[]>;
  promos$: DataSet<Promo[]>;
  readonly DataStat = DataStat;

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
      id: {title: 'Id'},
      name: {title: 'Name'},
      description: {title: 'Description'},
    }
  };

  constructor(private promoService: PromoService,
              private snackBar: MatSnackBar,
              private productService: ProductService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.promos$ = this.promoService.getAll();
    this.promoTypes$ = this.promoService.getTypes();

  }

  ngOnDestroy(): void {
    console.log('promos component destroyed');
  }

  openDialog(dialog, data?): void {
    const dialogRef = this.dialog.open(
      dialogsComponentsMapper[dialog],
      {
        width: '80%',
        minWidth: 600,
        data: {data: data || null}
    });

    dialogRef.afterClosed().subscribe((stat: Payload<Promo | PromoType>) => {
      if (stat?.stat === DataStat.LOADED) {
        this.snackBar.open('success', '', {duration: 3000});
        this.refresh(dialog);
      }
    });
  }

  createOrEditPromo(event?: any): void {
    this.openDialog('promo', event?.data);
  }

  createOrEditPromoType(event?: any): void {
    this.openDialog('promoType', event?.data);
  }

  deletePromo(event): void {
  //   const id = event.data.id;
  //   this.promoService.delete(id).subscribe(
  //     (response: HttpResponse<any>) => {
  //       this.refresh('promo');
  //       this.snackBar.open('success', '', {duration: 3000});
  //     },
  //     () => this.snackBar.open('error', '', {duration: 3000}));
  }

  deletePromoType(event): void {
    const id = event.data.id;
    this.promoService.deletePromoType(id).subscribe(() => this.refresh('promoType'));
  }

  refresh(s): void {
    switch (s) {
      case 'promo':
        this.promos$ = this.promoService.getAll();
        break;
      case 'promoType':
        this.promoTypes$ = this.promoService.getTypes();
        break;
    }
  }
}
