import {Money}       from "./money";
import {Movie}       from "./movie";
import {Reservation} from "./reservation";

export class Screening {
    private movie: Movie;
    private sequence: number;
    private whenScreened: Date;

    constructor(movie: Movie, sequence: number, whenScreened: Date) {
        this.movie = movie;
        this.sequence = sequence;
        this.whenScreened = whenScreened;
    }

    public reserve(customer: Customer, audienceCount: number): Reservation {
        return new Reservation(customer, this.calculateFee(audienceCount), audienceCount);
    }


    private calculateFee(audienceCount: number): Money {
        return this.movie.calculateMovieFee(this).times(audienceCount);
    }

    public getStartTime(): Date {
        return this.whenScreened;
    }

    public isSequence(sequence: number): boolean {
        return this.sequence === sequence;
    }

    public getMovieFee(): Money {
        return this.movie.getFee();
    }
}
