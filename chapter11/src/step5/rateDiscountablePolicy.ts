import {AdditionalRatePolicy} from "./additionalRatePolicy";
import {Money}                from "../money/money";
import {RatePolicy}           from "./ratePolicy";

export class RateDiscountablePolicy extends AdditionalRatePolicy {
    private discountAmount: Money;


    constructor(next: RatePolicy, discountAmount: Money) {
        super(next);
        this.discountAmount = discountAmount;
    }

    protected override afterCalculated(fee: Money): Money {
        return fee.minus(this.discountAmount);
    }
}
