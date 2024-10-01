import {DiscountPolicy}    from "./discountPolicy";
import {Money}             from "./money";
import {DiscountCondition} from "./discountCondition";
import {Screening}         from "./screening";

export class AmountDiscountPolicy extends DiscountPolicy {
    private discountAmount: Money;

    constructor(discountAmount: Money, ...conditions: DiscountCondition[]) {
        super(...conditions);
        this.discountAmount = discountAmount;
    }

    // override
    protected getDiscountAmount(screening: Screening): Money {
        return this.discountAmount;
    }

}
