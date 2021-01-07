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
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    AddProductComponent,
    AdminComponent,
    ProductsComponent,
    HeaderComponent,
    SidenavComponent,
    AddCategoryComponent,
    EditProductComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    Ng2SmartTableModule
  ]
})
export class AdminModule { }
