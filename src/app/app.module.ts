import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {MaterialModule} from './material/material.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";
import {NgxWebstorageModule} from "ngx-webstorage";

@NgModule({
    declarations: [
      AppComponent,
      PageNotFoundComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      CoreModule,
      MaterialModule,
      ComponentsModule,
      NgxWebstorageModule.forRoot()
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
