import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material/material.module";
import {AppRoutingModule} from "../app-routing.module";
import { ProductComponent } from './product/product.component';
import {BrowserModule} from "@angular/platform-browser";
import { FeatuerSliderComponent } from './featuer-slider/featuer-slider.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { BannerComponent } from './banner/banner.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoriesComponent } from './categories/categories.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { HotpicksComponent } from './hotpicks/hotpicks.component';
import { PromosComponent } from './promos/promos.component';
import { PromoDetailsComponent } from './promo-details/promo-details.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import { ProductCardComponent } from './product-card/product-card.component';
import {TruncateTextPipe} from "../shared/truncate-text.pipe";
import { UserAccountComponent } from './user-account/user-account.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { DefalultComponent } from './defalult/defalult.component';
import { InputComponent } from './shared/input/input.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { TextareaComponent } from './shared/textarea/textarea.component';
import { ButtonComponent } from './shared/button/button.component';
import { SelectComponent } from './shared/select/select.component';
import { RadiobuttonComponent } from './shared/radiobutton/radiobutton.component';
import { DynamicFieldDirective } from './shared/dynamic-field/dynamic-field.directive';


@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ProductComponent,
    FeatuerSliderComponent,
    ProductGridComponent,
    BannerComponent,
    BestSellerComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoriesComponent,
    HotpicksComponent,
    PromosComponent,
    PromoDetailsComponent,
    ProductCardComponent,
    TruncateTextPipe,
    UserAccountComponent,
    AddProductComponent,
    AdminComponent,
    DefalultComponent,
    InputComponent,
    CheckboxComponent,
    TextareaComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    DynamicFieldDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeatuerSliderComponent,
    ProductGridComponent,
    BannerComponent,
    BestSellerComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    IvyCarouselModule,
  ]
})
export class ComponentsModule { }
