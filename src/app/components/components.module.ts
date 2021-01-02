import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './default/home/home.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {AppRoutingModule} from '../app-routing.module';
import { ProductComponent } from './default/product/product.component';
import {BrowserModule} from '@angular/platform-browser';
import { FeatuerSliderComponent } from './default/featuer-slider/featuer-slider.component';
import { ProductGridComponent } from './default/product-grid/product-grid.component';
import { BannerComponent } from './default/banner/banner.component';
import { BestSellerComponent } from './default/best-seller/best-seller.component';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { CategoriesComponent } from './default/categories/categories.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HotpicksComponent } from './default/hotpicks/hotpicks.component';
import { PromosComponent } from './default/promos/promos.component';
import { PromoDetailsComponent } from './default/promo-details/promo-details.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProductCardComponent } from './default/product-card/product-card.component';
import {TruncateTextPipe} from '../shared/truncate-text.pipe';
import { UserAccountComponent } from './default/user-account/user-account.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { InputComponent } from './shared/input/input.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { TextareaComponent } from './shared/textarea/textarea.component';
import { ButtonComponent } from './shared/button/button.component';
import { SelectComponent } from './shared/select/select.component';
import { RadiobuttonComponent } from './shared/radiobutton/radiobutton.component';
import {AdminModule} from './admin/admin.module';
import {DefaultModule} from './default/default.module';
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    IvyCarouselModule,
    AuthModule,
    AdminModule,
    DefaultModule
  ]
})
export class ComponentsModule { }
