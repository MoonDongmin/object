import {Call}            from "./call";
import {Phone}           from "./phone";
import {Money}           from "./money/money";
import {BasicRatePolicy} from "./basicRatePolicy";

const LATE_NIGHT_HOUR = 22;

export class NightlyDiscountPolicy extends BasicRatePolicy {
    private nightlyAmount: Money;
    private regularAmount: Money;
    private seconds: number;


    constructor(nightlyAmount: Money, regularAmount: Money, seconds: number) {
        super();
        this.nightlyAmount = nightlyAmount;
        this.regularAmount = regularAmount;
        this.seconds = seconds;
    }

    protected override calculateCallFee(call: Call): Money {
        if (call.getFrom().getHours() >= LATE_NIGHT_HOUR) {
            return this.nightlyAmount.times(call.getDuration() / this.seconds);
        }

        return this.regularAmount.times(call.getDuration() / this.seconds);

    }
}
