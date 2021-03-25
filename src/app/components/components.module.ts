import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {AdminModule} from './admin/admin.module';
import {DefaultModule} from './default/default.module';
import {AuthModule} from './auth/auth.module';
import { LoadingComponent } from './shared/loading/loading.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    DefaultModule,
  ],
  declarations: [
  LoadingComponent]
})
export class ComponentsModule { }
