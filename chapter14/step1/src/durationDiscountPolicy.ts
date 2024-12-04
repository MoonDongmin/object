import {BasicRatePolicy}      from "./basicRatePolicy";
import {DurationDiscountRule} from "./durationDiscountRule";
import {Call}                 from "./call";
import {Money}                from "./money/money";

export class DurationDiscountPolicy extends BasicRatePolicy {
    private rules: DurationDiscountRule[] = [];

    constructor(rules: DurationDiscountRule[]) {
        super();
        this.rules = rules;
    }

    protected override calculateCallFee(call: Call): Money {
        const result: Money = Money.ZERO;
        for (let rule of this.rules) {
            result.plus(rule.calculate(call));
        }
        return result;
    }
}
