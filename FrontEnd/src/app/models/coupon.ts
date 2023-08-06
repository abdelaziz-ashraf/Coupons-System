export interface Coupon {
    id: number,
    code: string,
    maxAllowedUses: number, 
    usageNumber: number, 
    type: string,
    value: number, 
    active: boolean, 
    expiryDate: Date
}