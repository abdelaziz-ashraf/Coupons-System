package com.miniFawry.couponAPI.Excptions;

public class ExpiryDateException extends IllegalArgumentException{
    public ExpiryDateException() {
        super("Expiry date cannot be in the past");
    }
}
