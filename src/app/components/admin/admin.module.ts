import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddProductComponent} from "./add-product/add-product.component";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {MaterialModule} from "../../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AddProductComponent,
    AdminComponent,
    ProductsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
