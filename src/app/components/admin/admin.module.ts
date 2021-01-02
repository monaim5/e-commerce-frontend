import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddProductComponent} from "./add-product/add-product.component";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddProductComponent,
    AdminComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
