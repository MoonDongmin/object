import {DefaultDiscountPolicy} from "./defaultDiscountPolicy";
import {Money}                 from "./money";
import {DiscountCondition}     from "./discountCondition";
import {Screening}             from "./screening";

export class AmountDiscountPolicy extends DefaultDiscountPolicy {
    private discountAmount: Money;

    constructor(discountAmount: Money, ...conditions: DiscountCondition[]) {
        super(...conditions);
        this.discountAmount = discountAmount;
    }

    // override
    protected override getDiscountAmount(screening: Screening): Money {
        return this.discountAmount;
    }

}
