import {RatePolicy} from "./ratePolicy";
import {Call}       from "./call";
import {Money}      from "../money/money";
export class Phone {
    private ratePolicy: RatePolicy;
    private calls: Call[] = [];

    constructor(ratePolicy: RatePolicy) {
        this.ratePolicy = ratePolicy;
    }

    public getCalls(): readonly Call[] {
        return this.calls;
    }

    public calculateFee(): Money {
        return this.ratePolicy.calculateFee(this);
    }
}
