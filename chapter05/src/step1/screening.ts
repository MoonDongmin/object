import {Movie} from "./ movie";
import {Customer} from "./customer";
import {Reservation} from "./reservation";

export class Screening {
    private movie: Movie;
    private sequence: number;
    private whenScreened: Date;

    private reserve(customer: Customer, audienceCount: number): Reservation {
        return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
    }

    private calculateFee(audienceCount: number) {
        return this.movie.calculateMovieFee(this).times(audienceCount);
    }

    public getWhenScreened(): Date {
        return this.whenScreened;
    }

    public getSequence(): number {
        return this.sequence;
    }
}
