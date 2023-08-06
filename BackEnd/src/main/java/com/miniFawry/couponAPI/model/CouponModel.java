package com.miniFawry.couponAPI.model;

//import com.miniFawry.couponAPI.entity.ConsumptionHistory;
import com.miniFawry.couponAPI.entity.ConsumptionHistory;
import com.miniFawry.couponAPI.entity.enums.CouponType;
import lombok.Data;

import java.util.Date;

@Data
public class CouponModel {
    Long id;
    String code; // name
    Long maxAllowedUses;
    Long usageNumber;
//    CouponType type;
    String type;
    Long value;
    boolean active;
    Date expiryDate;
}
