import {AdditionalRatePolicy} from "./additionalRatePolicy";
import {RatePolicy}           from "./ratePolicy";
import {Money}                from "./money/money";

export class TaxablePolicy extends AdditionalRatePolicy {
    private taxRatio: number;

    constructor(next: RatePolicy, taxRatio: number) {
        super(next);
        this.taxRatio = taxRatio;
    }

    protected override afterCalculated(fee: Money): Money {
        return fee.plus(fee.times(this.taxRatio));
    }
}
