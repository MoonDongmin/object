import {RegularPhone} from "./regularPhone";
import {Money}        from "../money/money";

export class TaxableRegularPhone extends RegularPhone {
    private taxRate2: number;

    constructor(amount: Money, seconds: number, taxRate: number) {
        super(amount, seconds, taxRate);
        this.taxRate2 = taxRate;
    }

    public override calculateFee(): Money {
        const fee: Money = super.calculateFee();
        return fee.plus(fee.times(this.taxRate2));
    }
}
