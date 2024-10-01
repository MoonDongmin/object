import {Money}          from "./money";
import {Screening}      from "./screening";
import {DiscountPolicy} from "./discountPolicy";

export class Movie {
    private title: string;
    private runningTime: number;
    private fee: Money;
    private discountPolicy: DiscountPolicy;

    constructor(title: string, runningTime: number, fee: Money, discountPolicy: DiscountPolicy) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountPolicy = discountPolicy;
    }

    public getFee(): Money {
        return this.fee;
    }

    public calculateMovieFee(screening: Screening): Money {
        return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
    }
}
