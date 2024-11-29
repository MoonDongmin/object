import {Phone} from "./phone";
import {Money} from "./money/money";

export interface RatePolicy {
    calculateFee(phone: Phone): Money;
}
