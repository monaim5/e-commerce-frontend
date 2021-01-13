import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/default/home/home.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {SigninComponent} from './components/auth/signin/signin.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {AdminComponent} from './components/admin/admin.component';
import {AddProductComponent} from './components/admin/add-product/add-product.component';
import {DefaultComponent} from './components/default/default.component';
import {ProductsComponent as AdminProductsComponent} from './components/admin/products/products.component';
import {ProductsComponent as DefaultProductsComponent} from './components/default/products/products.component';
import {AddCategoryComponent} from './components/admin/add-category/add-category.component';
import {EditProductComponent} from './components/admin/edit-product/edit-product.component';
import {PromosComponent} from './components/admin/promos/promos.component';
import {TestComponent} from './components/admin/test/test.component';
import {SavePromoComponent} from './components/admin/save-promo/save-promo.component';

const routes: Routes = [
  { path: '', component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: DefaultProductsComponent },
  ]},
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'addProduct', component: AddProductComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'products/:id', component: EditProductComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'promos', component: PromosComponent },
      { path: 'test', component: TestComponent },
      { path: 'editPromo', component: SavePromoComponent },
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
