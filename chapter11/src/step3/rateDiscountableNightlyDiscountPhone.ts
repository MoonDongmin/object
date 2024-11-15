import {NightlyDiscountPhone} from "./nightlyDiscountPhone";
import {Money}                from "../money/money";

export class RateDiscountableNightlyDiscountPhone extends NightlyDiscountPhone {
    private discountAmount: Money;

    constructor(nightlyAmount: Money, regularAmount: Money, seconds: number, taxRate: number, discountAmount: Money) {
        super(nightlyAmount, regularAmount, seconds, taxRate);
        this.discountAmount = discountAmount;
    }

    protected override afterCalculated(fee: Money): Money {
        return fee.minus(this.discountAmount);
    }
}
