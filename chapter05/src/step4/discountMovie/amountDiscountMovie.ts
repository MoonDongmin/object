import {Movie}             from "../ movie";
import {Money}             from "../money";
import {DiscountCondition} from "../discountCondition/discountCondition";

export class AmountDiscountMovie extends Movie {
    private discountAmount: Money;

    constructor(title: string, runningTime: Date, fee: Money, discountConditions: DiscountCondition, discountAmount: Money) {
        super(title, runningTime, fee, discountConditions);
        this.discountAmount = discountAmount;
    }

    protected override calculateDiscountAmount(): Money {
        return this.discountAmount;
    }
}
