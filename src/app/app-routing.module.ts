import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {SigninComponent} from "./components/auth/signin/signin.component";
import {ProductComponent} from "./components/product/product.component";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {DefalultComponent} from "./components/defalult/defalult.component";

const routes: Routes = [
  { path: '', component: DefalultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductComponent },
  ]},
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'addProduct', component: AddProductComponent }
  ]},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
