import {Screening}         from "./screening";
import {Money}             from "./money";
import {DiscountCondition} from "./discountCondition";
import {DiscountPolicy}    from "./discountPolicy";

export abstract class DefaultDiscountPolicy implements DiscountPolicy {
    private conditions: DiscountCondition[] = [];

    constructor(...conditions: DiscountCondition[]) {
        this.conditions = conditions;
    }

    public calculateDiscountAmount(screening: Screening): Money {
        for (const each of this.conditions) {
            if (each.isSatisfiedBy(screening)) {
                return this.getDiscountAmount(screening);
            }
        }
        return Money.ZERO;
    }

    protected abstract getDiscountAmount(screening: Screening): Money;
}
