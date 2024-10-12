import {DiscountConditionType} from "./discountConditionType";
import {Screening}             from "./screening";
import {Customer}              from "./customer";
import {Money}                 from "./money";
import {DiscountCondition}     from "./discountCondition";
import {Movie}                 from "./movie";
import {MovieType}             from "./movieType";
import {Reservation}           from "./reservation";

class ReservationAgency {
    public reserve(screening: Screening, customer: Customer, audienceCount: number) {
        const discountable: boolean = this.checkDiscountable(screening);
        const fee: Money = this.calculateFee(screening, discountable, audienceCount);
        return this.createReservation(screening, customer, audienceCount, fee);
    }

    private checkDiscountable(screening: Screening) {
        return screening.getMovie().getDiscountConditions()
            .some((condition) => this.isDiscountable(condition, screening));
    }

    private isDiscountable(condition: DiscountCondition, screening: Screening) {
        if (condition.getType() === DiscountConditionType.PERIOD) {
            return this.isSatisfiedByPeriod(condition, screening);
        }
        return this.isSatisfiedBySequence(condition, screening);
    }

    private isSatisfiedBySequence(condition: DiscountCondition, screening: Screening) {
        return false;
    }

    private isSatisfiedByPeriod(condition: DiscountCondition, screening: Screening) {
        return condition.getSequence() === screening.getSequence();
    }

    private calculateFee(screening: Screening, discountable: boolean, audienceCount: number) {
        if (discountable) {
            return screening.getMovie().getFee()
                .minus(this.calculateDiscountedFee(screening.getMovie()))
                .times(audienceCount);
        }
        return screening.getMovie().getFee().times(audienceCount);
    }

    private calculateDiscountedFee(movie: Movie) {
        switch (movie.getMovieType()) {
            case MovieType.AMOUNT_DISCOUNT:
                return this.calculateAmountDiscountedFee(movie);
            case MovieType.PERCENT_DISCOUNT:
                return this.calculatePercentDiscountedFee(movie);
            case MovieType.NONE_DISCOUNT:
                return this.calculateNoneDiscountedFee(movie);
        }
        throw new Error("에러");
    }

    private calculateAmountDiscountedFee(movie: Movie) {
        return movie.getDiscountAmount();
    }

    private calculatePercentDiscountedFee(movie: Movie) {
        return movie.getFee().times(movie.getDiscountPercent());
    }

    private calculateNoneDiscountedFee(movie: Movie) {
        return Money.ZERO;
    }

    private createReservation(screening: Screening, customer: Customer, audienceCount: number, fee: Money) {
        return new Reservation(customer, screening, fee, audienceCount);
    }
}
