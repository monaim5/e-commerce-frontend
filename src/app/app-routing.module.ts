import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/default/home/home.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {SigninComponent} from './components/auth/signin/signin.component';
import {ProductComponent} from './components/default/product/product.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddProductComponent} from './components/admin/add-product/add-product.component';
import {DefaultComponent} from "./components/default/default.component";

const routes: Routes = [
  { path: '', component: DefaultComponent,
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
