import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CouponComponent } from './layouts/coupon/coupon.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ConsumptionHistoryComponent } from './layouts/consumption-history/consumption-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CouponComponent,
    NavbarComponent,
    ConsumptionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
