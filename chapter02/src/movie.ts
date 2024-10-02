import {Money}                 from "./money";
import {Screening}             from "./screening";
import {DefaultDiscountPolicy} from "./defaultDiscountPolicy";
import {DiscountPolicy}        from "./discountPolicy";

export class Movie {
    private title: string;
    private runningTime: number;
    private fee: Money;
    private discountPolicy: DiscountPolicy;

    constructor(title: string, runningTime: number, fee: Money, discountPolicy: DefaultDiscountPolicy) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountPolicy = discountPolicy;
    }

    public getFee(): Money {
        return this.fee;
    }

    public calculateMovieFee(screening: Screening): Money {
        if (this.discountPolicy === null) {
            return this.fee;
        }
        return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
    }

    public changeDiscountPolicy(discountPolicy: DiscountPolicy): void {
        this.discountPolicy = discountPolicy;
    }
}
