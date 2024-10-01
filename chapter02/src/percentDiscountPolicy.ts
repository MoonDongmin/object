import {DiscountPolicy}    from "./discountPolicy";
import {DiscountCondition} from "./discountCondition";
import {Screening}         from "./screening";
import {Money}             from "./money";

export class PercentDiscountPolicy extends DiscountPolicy {
    private percent: number;

    constructor(percent: number, ...conditions: DiscountCondition[]) {
        super(...conditions);
        this.percent = percent;
    }

    //override
    protected getDiscountAmount(screening: Screening): Money {
        return screening.getMovieFee().times(this.percent);
    }
}
