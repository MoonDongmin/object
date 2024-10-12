import {DiscountCondition} from "./discountCondition/discountCondition";
import {Money}             from "./money";
import {MovieType}         from "./movieType";
import {Screening}         from "./screening";


export abstract class Movie {
    private title: string;
    private runningTime: Date;
    private fee: Money;
    private discountConditions: DiscountCondition[];


    constructor(title: string, runningTime: Date, fee: Money, ...discountConditions: DiscountCondition[]) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountConditions = discountConditions;
    }

    public calculateMovieFee(screening: Screening): Money {
        if (this.isDiscountable(screening)) {
            return this.fee.minus(this.calculateDiscountAmount());
        }

        return this.fee;
    }

    private isDiscountable(screening: Screening): boolean {
        return this.discountConditions
            .some((condition) => condition.isSatisfiedBy(screening));
    }

    protected getFee(): Money {
        return this.fee;
    }

    protected abstract calculateDiscountAmount(): Money;
}
