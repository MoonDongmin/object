import {Phone} from "./phone";
import {Call}  from "./call";
import {Money} from "./money/money";

export class RegularPhone extends Phone {
    private amount: Money;
    private seconds: number;

    constructor(amount: Money, seconds: number, taxRate: number) {
        super(taxRate);
        this.amount = amount;
        this.seconds = seconds;
    }

    protected calculateCallFee(call: Call): Money {
        const durationInSeconds = call.getDuration() / 1000; // Duration in seconds
        return this.amount.times(durationInSeconds / this.seconds);
    }
}
