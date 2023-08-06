import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'

import { environment } from "environments/environment";
import { Coupon } from "../models/coupon";

@Injectable({
    providedIn:'root' 
})
export class CouponService {
    private apiServerUrl= environment.apiUrl

    constructor(private http: HttpClient) {}

    public getCoupons(): Observable<Coupon[]> {
        return this.http.get<Coupon[]>(`${this.apiServerUrl}/coupons/`)
    }

    public getActiveCoupons(): Observable<Coupon[]> {
        return this.http.get<Coupon[]>(`${this.apiServerUrl}/coupons/active-coupons`)
    }

    public addCoupon(coupon: Coupon): Observable<void> {
        return this.http.post<void>(`${this.apiServerUrl}/coupons/`, coupon)
    }
    
    public deactivateCoupon(code: String): Observable<void> {
        return this.http.put<void>(`${this.apiServerUrl}/coupons/${code}/deactivate`, null) 
    }

    public getCouponByCode(code: String): Observable<Coupon> {
        return this.http.get<Coupon>(`${this.apiServerUrl}/coupons/${code}`)
    }
} 