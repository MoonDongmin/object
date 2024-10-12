import {Movie}             from "../ movie";
import {Money}             from "../money";
import {DiscountCondition} from "../discountCondition/discountCondition";

export class NoneDiscountMovie extends Movie {

    constructor(title: string, runningTime: Date, fee: Money, discountConditions: DiscountCondition, percent: number) {
        super(title, runningTime, fee, discountConditions);
    }

    protected override calculateDiscountAmount(): Money {
        return Money.ZERO;
    }
}
