import {Call}  from "./call";
import {Phone} from "./phone";
import {Money} from "./money/money";

const LATE_NIGHT_HOUR = 22;

export class NightlyDiscountPhone extends Phone {
    private nightlyAmount: Money;
    private regularAmount: Money;
    private seconds: number;

    constructor(nightlyAmount: Money, regularAmount: Money, seconds: number, taxRate: number) {
        super(taxRate);
        this.nightlyAmount = nightlyAmount;
        this.regularAmount = regularAmount;
        this.seconds = seconds;
    }

    protected calculateCallFee(call: Call): Money {
        const durationInSeconds = call.getDuration() / 1000; // Duration in seconds

        if (call.getFrom().getHours() >= LATE_NIGHT_HOUR) {
            return this.nightlyAmount.times(durationInSeconds / this.seconds);
        } else {
            return this.regularAmount.times(durationInSeconds / this.seconds);
        }
    }
}
