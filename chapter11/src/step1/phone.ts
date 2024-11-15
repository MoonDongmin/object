import {Call}  from "./call";
import {Money} from "../money/money";

export abstract class Phone {
    private taxRate: number;
    private calls: Call[] = [];

    constructor(taxRate: number) {
        this.taxRate = taxRate;
    }

    public calculateFee(): Money {
        let result = Money.ZERO;

        for (const call of this.calls) {
            result = result.plus(this.calculateCallFee(call));
        }

        return result.plus(result.times(this.taxRate));
    }

    protected abstract calculateCallFee(call: Call): Money;
}
