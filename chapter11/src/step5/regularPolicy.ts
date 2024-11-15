import {BasicRatePolicy} from "./basicRatePolicy";
import {Money}           from "../money/money";
import {Call}            from "./call";

export class RegularPolicy extends BasicRatePolicy {
    private amount: Money;
    private seconds: number;

    constructor(amount: Money, seconds: number) {
        super();
        this.amount = amount;
        this.seconds = seconds;
    }

    protected override calculateCallFee(call: Call): Money {
        return this.amount.times(call.getDuration() / this.seconds);
    }
}

