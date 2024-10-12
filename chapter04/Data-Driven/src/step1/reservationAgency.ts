import {DiscountConditionType} from "./discountConditionType";
import {Screening}             from "./screening";
import {Customer}              from "./customer";
import {Reservation}           from "./reservation";
import {Movie}                 from "./movie";
import {MovieType}             from "./movieType";
import {Money}                 from "./money";

class ReservationAgency {
    reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
        const movie: Movie = screening.getMovie();
        let discountable: boolean = false;

        // 할인 조건 확인
        for (const condition of movie.getDiscountConditions()) {
            if (condition.getType() === DiscountConditionType.PERIOD) {
                discountable =
                    screening.getWhenScreened().getDayOfWeek() === condition.getDayOfWeek() &&
                    condition.getStartTime().compareTo(screening.getWhenScreened().toLocalTime()) <= 0 &&
                    condition.getEndTime().compareTo(screening.getWhenScreened().toLocalTime()) >= 0;
            } else {
                discountable = condition.getSequence() === screening.getSequence();
            }

            if (discountable) {
                break;
            }
        }

        let fee: Money;
        if (discountable) {
            let discountAmount: Money = Money.ZERO;

            // 영화 타입에 따른 할인 계산
            switch (movie.getMovieType()) {
                case MovieType.AMOUNT_DISCOUNT:
                    discountAmount = movie.getDiscountAmount();
                    break;
                case MovieType.PERCENT_DISCOUNT:
                    discountAmount = movie.getFee().times(movie.getDiscountPercent());
                    break;
                case MovieType.NONE_DISCOUNT:
                    discountAmount = Money.ZERO;
                    break;
            }

            fee = movie.getFee().minus(discountAmount);
        } else {
            fee = movie.getFee();
        }

        return new Reservation(customer, screening, fee, audienceCount);
    }
}
