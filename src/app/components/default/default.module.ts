import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {FeatuerSliderComponent} from './featuer-slider/featuer-slider.component';
import {ProductGridComponent} from './product-grid/product-grid.component';
import {BannerComponent} from './banner/banner.component';
import {BestSellerComponent} from './best-seller/best-seller.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CategoriesComponent} from './categories/categories.component';
import {HotpicksComponent} from './hotpicks/hotpicks.component';
import {PromosComponent} from './promos/promos.component';
import {PromoDetailsComponent} from './promo-details/promo-details.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {TruncateTextPipe} from '../../shared/truncate-text.pipe';
import {UserAccountComponent} from './user-account/user-account.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from "../../material/material.module";
import {IvyCarouselModule} from "angular-responsive-carousel";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoriesComponent,
    ProductComponent,
    FeatuerSliderComponent,
    ProductGridComponent,
    BannerComponent,
    BestSellerComponent,
    HotpicksComponent,
    PromosComponent,
    PromoDetailsComponent,
    ProductCardComponent,
    UserAccountComponent,
    TruncateTextPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    IvyCarouselModule,
    AppRoutingModule
  ]
})
export class DefaultModule { }
