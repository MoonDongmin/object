import {Money}            from "./money/money";
import {DateTimeInterval} from "./dateTimeInterval";

export class FeePerDuration {
    private fee: Money;
    private durationMs: number;

    constructor(fee: Money, durationMs: number) {
        this.fee = fee;
        this.durationMs = durationMs;
    }

    public calculate(interval: DateTimeInterval): Money {
        const intervalDurationMs = interval.duration();

        const result = Math.ceil(intervalDurationMs / this.durationMs);

        return this.fee.times(result);
    }
}
