import {FeeRule} from "./feeRule";

import {Call}       from "./call";
import {Money}      from "./money/money";
import {RatePolicy} from "./ratePolicy";
import {Phone}      from "./phone";

export class BasicRatePolicy implements RatePolicy {
    private feeRules: FeeRule[];

    constructor(...feeRules: FeeRule[]) {
        this.feeRules = feeRules;
    }

    // @Override
    public calculateFee(phone: Phone): Money {
        return phone.getCalls()
            .map((call) => this.calculate(call))
            .reduce((first, second) => first.plus(second), Money.ZERO);
    }

    private calculate(call: Call): Money {
        return this.feeRules
            .map((rule) => rule.calculateFee(call))
            .reduce((first, second) => first.plus(second), Money.ZERO);
    }
}
