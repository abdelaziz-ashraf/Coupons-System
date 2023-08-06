import { Coupon } from "./coupon"

export interface Consumptions {
    id: number,
    usedCoupon: Coupon,
    orderId: number,
    priceBefore: number, 
    priceAfter: number, 
    consumedAt: Date
}