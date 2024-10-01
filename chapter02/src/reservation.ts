import {Screening} from "./screening";
import {Money}     from "./money";

export class Reservation {
    private customer: Custmoer;
    private screening: Screening;
    private fee: Money;
    private audienceCount: number;

    constructor(customer: Custmoer, screening: Screening, fee: Money, audienceCount: number) {
        this.customer = customer;
        this.screening = screening;
        this.fee = fee;
        this.audienceCount = audienceCount;
    }
}
