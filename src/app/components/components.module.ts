import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {AdminModule} from './admin/admin.module';
import {DefaultModule} from './default/default.module';
import {AuthModule} from './auth/auth.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    DefaultModule
  ],
  declarations: []
})
export class ComponentsModule { }
