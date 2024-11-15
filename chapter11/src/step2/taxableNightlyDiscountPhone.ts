import {NightlyDiscountPhone} from "./nightlyDiscountPhone";
import {Money}                from "../money/money";

export class TaxableNightlyDiscountPhone extends NightlyDiscountPhone {
    private taxRate2: number;


    constructor(nightlyAmount: Money, regularAmount: Money, seconds: number, taxRate: number, taxRate2: number) {
        super(nightlyAmount, regularAmount, seconds, taxRate);
        this.taxRate2 = taxRate2;
    }

    protected override afterCalculated(fee: Money): Money {
        return fee.plus(fee.times(this.taxRate2));
    }
}
