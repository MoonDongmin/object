import {Screening}      from "./screening";
import {Money}          from "./money";
import {DiscountPolicy} from "./discountPolicy";

export class NoneDiscountPolicy implements DiscountPolicy {
    public calculateDiscountAmount(screening: Screening): Money {
        return Money.ZERO;
    }
}
