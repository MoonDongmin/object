import {FeeCondition}     from "./feeCondition";
import {Call}             from "./call";
import {DateTimeInterval} from "./dateTimeInterval";
import {FeePerDuration}   from "./feePerDuration";
import {Money}            from "./money/money";

export class FeeRule {
    private feeCondition: FeeCondition;
    private feePerDuration: FeePerDuration;

    constructor(feeCondition: FeeCondition, feePerDuration: FeePerDuration) {
        this.feeCondition = feeCondition;
        this.feePerDuration = feePerDuration;
    }

    public calculateFee(call: Call): Money {
        const intervals: DateTimeInterval[] = this.feeCondition.findTimeIntervals(call);
        return intervals.reduce((total, interval) => {
            return total.plus(this.feePerDuration.calculate(interval));
        }, Money.ZERO);
    }
}
