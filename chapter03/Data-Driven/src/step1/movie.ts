import {Money}             from "./money";
import {MovieType}         from "./movieType";
import {DiscountCondition} from "./discountCondition";

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

    public setMovieType(movieType: MovieType): void {
        this.movieType = movieType;
    }

    public getFee(): Money {
        return this.fee;
    }

    public setFee(fee: Money): void {
        this.fee = fee;
    }

    public getDiscountConditions(): DiscountCondition[] {
        return this.discountConditions;
    }

    public setDiscountConditions(discountConditions: DiscountCondition[]): void {
        this.discountConditions = discountConditions;
    }

    public getDiscountAmount(): Money {
        return this.discountAmount;
    }

    public setDiscountAmount(discountAmount: Money): void {
        this.discountAmount = discountAmount;
    }

    public getDiscountPercent(): number {
        return this.discountPercent;
    }

    public setDiscountPercent(discountPercent: number): void {
        this.discountPercent = discountPercent;
    }
}
