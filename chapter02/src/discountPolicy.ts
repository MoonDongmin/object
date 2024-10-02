import {Screening} from "./screening";
import {Money}     from "./money";

export interface DiscountPolicy {
    calculateDiscountAmount(screening: Screening): Money;
}
