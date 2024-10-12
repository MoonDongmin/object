import {Movie}             from "../ movie";
import {Money}             from "../money";
import {DiscountCondition} from "../discountCondition/discountCondition";

export class PercentDiscountMovie extends Movie {
    private percent: number;

    constructor(title: string, runningTime: Date, fee: Money, discountConditions: DiscountCondition, percent: number) {
        super(title, runningTime, fee, discountConditions);
        this.percent = percent;
    }

    protected override calculateDiscountAmount(): Money {
        return this.getFee().times(this.percent);
    }
}
