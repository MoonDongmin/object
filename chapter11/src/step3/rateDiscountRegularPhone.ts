import {Phone}        from "./phone";
import {Call}         from "./call";
import {Money}        from "../money/money";
import {RegularPhone} from "./regularPhone";

export class RateDiscountRegularPhone extends RegularPhone {
    private discountAmount: Money;

    constructor(amount: Money, seconds: number, taxRate: number, discountAmount: Money) {
        super(amount, seconds, taxRate);
        this.discountAmount = discountAmount;
    }

    protected override afterCalculated(fee: Money): Money {
        return fee.minus(this.discountAmount);
    }
}
