import {BasicRatePolicy}       from "./basicRatePolicy";
import {DayOfWeekDiscountRule} from "./dayOfWeekDiscountRule";
import {Call}                  from "./call";
import {Money}                 from "./money/money";

export class DayOfWeekDiscountPolicy extends BasicRatePolicy {
    private rules: DayOfWeekDiscountRule[] = [];

    constructor(rules: DayOfWeekDiscountRule[]) {
        super();
        this.rules = rules;
    }

    protected override calculateCallFee(call: Call): Money {
        let result: Money = Money.ZERO;
        for (const interval of call.getInterval().splitByDay()) {
            for (let rule of this.rules) {
                result.plus(rule.calculate(interval));
            }
        }
        return result;
    }
}
