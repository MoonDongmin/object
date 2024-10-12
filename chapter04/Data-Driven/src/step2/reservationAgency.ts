import {DiscountConditionType} from "./discountConditionType";
import {Screening}             from "./screening";
import {Customer}              from "./customer";
import {Reservation}           from "./reservation";
import {Movie}                 from "./movie";
import {MovieType}             from "./movieType";
import {Money}                 from "./money";

class ReservationAgency {
    public reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
        const fee: Money = screening.calculateFee(audienceCount);
        return new Reservation(customer, screening, fee, audienceCount);
    }
}
