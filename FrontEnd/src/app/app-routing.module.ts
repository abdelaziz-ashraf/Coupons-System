import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CouponComponent } from './layouts/coupon/coupon.component';
import { ConsumptionHistoryComponent } from './layouts/consumption-history/consumption-history.component';

const routes: Routes = [
  {path: '', component: CouponComponent}, 
  {path: 'consumption-history', component: ConsumptionHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 