package com.miniFawry.couponAPI.model;

import com.miniFawry.couponAPI.entity.Coupon;
import lombok.Data;

import java.util.Date;

@Data
public class ConsumptionHistoryModel {
    Long id;
    Long orderId;
    Long priceBefore;
    Long priceAfter;
    Coupon usedCoupon;

    Date consumedAt;
}
