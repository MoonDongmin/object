import {RatePolicy} from "./ratePolicy";
import {Phone}      from "./phone";
import {Money}      from "./money/money";

export abstract class AdditionalRatePolicy implements RatePolicy {
    private next: RatePolicy;

    constructor(next: RatePolicy) {
        this.next = next;
    }

    public calculateFee(phone: Phone) {
        const fee: Money = this.next.calculateFee(phone);
        return this.afterCalculated(fee);
    }

    protected abstract afterCalculated(fee: Money): Money;
}
