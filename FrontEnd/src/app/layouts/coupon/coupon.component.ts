import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit{
  public coupons: Coupon[] = [];
  public error: boolean = false;
  public errorMessage: string = '';


  constructor(private couponService: CouponService) {}

  ngOnInit(): void {
    this.getCoupons();
  }

  public getCoupons(): void {
    this.couponService.getCoupons().subscribe(
      (res: Coupon[]) => {
        this.coupons = res;
        this.error = false;
      }, 
      (err: HttpErrorResponse) => {
        this.error = true;
        this.errorMessage = err.error.errorMessage
      }
    )
  }
 
  public onAddCoupon(addForm: NgForm): void {
    
    this.couponService.addCoupon(addForm.value).subscribe(
      () => {
        this.error = false;
        addForm.reset();
        this.getCoupons();
      }, 
      (err: HttpErrorResponse) => {
        this.error = true;
        this.errorMessage = err.error.errorMessage;
        addForm.reset();
        // this.getCoupons();
      }
    )

  }

  public onViewActiveOnly(): void {
    this.couponService.getActiveCoupons()
    .subscribe(
      (res: Coupon[]) => {
        this.coupons = res;
        this.error = false;
      },
      (err: HttpErrorResponse) => {
        this.error = true;
        this.errorMessage = err.error.errorMessage;
      }
    )
  }

  public searchCouponByCode(searchForm: NgForm): any {
    this.couponService.getCouponByCode(searchForm.value.code)
    .subscribe(
      (coupon: Coupon) => {
        this.coupons = []
        this.coupons.push(coupon)
        this.error = false;
      },
      (err: HttpErrorResponse) => {
        this.error = true;
        this.errorMessage = err.error.errorMessage;
      }
    )
  }

  public showAllCoupons(): void {
    this.couponService.getCoupons().subscribe(coupons => {
      this.coupons = coupons;
      this.error = false;
    });
  }

  public showActiveCoupons(): void {
    this.couponService.getActiveCoupons().subscribe(coupons => {
      this.coupons = coupons;
      this.error = false;
    });
  }

  public deactivateCoupon(code: String): void {
    this.couponService.deactivateCoupon(code).subscribe(() => {
      this.error = false;
      this.showAllCoupons();
    }, 
    (err: HttpErrorResponse) => {
      this.error = true;
      this.errorMessage = err.error.errorMessage;
    });
  }
   
}
