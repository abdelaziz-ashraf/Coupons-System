package com.miniFawry.couponAPI.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

@Schema(name = "Consumption History Schema")
@Entity
@Data
public class ConsumptionHistory implements Serializable {

    public ConsumptionHistory() {}

    public ConsumptionHistory(Long orderId, Long priceBefore, Long priceAfter, Coupon usedCoupon) {
        this.orderId = orderId;
        this.priceBefore = priceBefore;
        this.priceAfter = priceAfter;
        this.usedCoupon = usedCoupon;
        this.consumedAt = new Date();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Long orderId;
    Long priceBefore;
    Long priceAfter;

    @ManyToOne
    @JoinColumn(name = "coupon_id", referencedColumnName = "id")
    Coupon usedCoupon;

    private Date consumedAt;
}
