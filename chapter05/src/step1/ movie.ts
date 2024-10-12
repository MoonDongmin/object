import {Screening}         from "./screening";
import {MovieType}         from "./movieType";
import {Money}             from "./money";
import {DiscountCondition} from "./discountCondition";

export class Movie {
    private title: string;
    private runningTime: Date;
    private fee: Money;
    private discountConditions: DiscountCondition[];

    private movieType: MovieType;
    private discountAmount: Money;
    private discountPercent: number;

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

    private calculateDiscountAmount() {
        switch (this.movieType) {
            case MovieType.AMOUNT_DISCOUNT:
                return this.calculateAmountDiscountAmount();
            case MovieType.PERCENT_DISCOUNT:
                return this.calculatePercentDiscountAmount();
            case MovieType.NONE_DISCOUNT:
                return this.calculateNoneDiscountAmount();
        }

        throw new Error("에러");
    }

    private calculateAmountDiscountAmount(): Money {
        return this.discountAmount;
    }

    private calculatePercentDiscountAmount(): Money {
        return this.fee.times(this.discountPercent);
    }

    private calculateNoneDiscountAmount(): Money {
        return Money.ZERO;
    }
}
