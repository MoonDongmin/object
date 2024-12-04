import {Call}  from "./call";
import {Money} from "./money/money";

export interface RatePolicy {
    calculateFee(phone: Phone): Money;
}

export class Phone {
    private ratePolicy: RatePolicy;
    private calls: Call[] = [];

    constructor(ratePolicy: RatePolicy) {
        this.ratePolicy = ratePolicy;
    }

    public call(call: Call): void {
        this.calls.push(call);
    }

    public getCalls(): ReadonlyArray<Call> {
        // TypeScript에서는 불변성을 보장하기 위해 ReadonlyArray 사용
        return this.calls;
    }

    public calculateFee(): Money {
        return this.ratePolicy.calculateFee(this);
    }
}
