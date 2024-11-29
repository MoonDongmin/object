import {RatePolicy} from "./ratePolicy";
import {Phone}      from "./phone";
import {Money}      from "./money/money";
import {Call}       from "./call";

export abstract class BasicRatePolicy implements RatePolicy {
    public calculateFee(phone: Phone) {
        let result = Money.ZERO;

        for (const call of phone.getCalls()) {
            result.plus(this.calculateCallFee(call));
        }

        return result;
    }

    protected abstract calculateCallFee(call: Call): Money;
}
