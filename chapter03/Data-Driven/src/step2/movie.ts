import {Money}                 from "./money";
import {MovieType}             from "./movieType";
import {DiscountCondition}     from "./discountCondition";
import {DiscountConditionType} from "./discountConditionType";

export class Movie {
    private title: string;
    private runningTime: number;
    private fee: Money;
    private discountConditions: DiscountCondition[];


    constructor(title: string, runningTime: number, fee: Money, discountConditions: DiscountCondition[]) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountConditions = discountConditions;
    }

    private movieType: MovieType;
    private discountAmount: Money;
    private discountPercent: number;

    public getMovieType(): MovieType {
        return this.movieType;
    }

    public calculateAmountDiscountedFee(): Money {
        if (this.movieType != MovieType.AMOUNT_DISCOUNT) {
            throw new Error("에러");
        }
        return this.fee.minus(this.discountAmount);
    }

    public calculatePercentDiscountedFee(): Money {
        if (this.movieType != MovieType.PERCENT_DISCOUNT) {
            throw new Error("에러");
        }
        return this.fee.minus(this.fee.times(this.discountPercent));
    }

    public calculateNoneDiscountedFee(): Money {
        if (this.movieType != MovieType.NONE_DISCOUNT) {
            throw new Error("에러");
        }
        return this.fee;
    }

    public isDiscountable(whenScreened: any, sequence: number): boolean {
        for (let condition of this.discountConditions) {
            if (condition.getType() === DiscountConditionType.PERIOD) {
                if (condition.isDiscountable(whenScreened.getDayOfWeek(), whenScreened.toLocalTime())) {
                    return true;
                }
            } else {
                if (condition.isDiscountable(sequence)) {
                    return true;
                }
            }
            return false;
        }
    }
}
