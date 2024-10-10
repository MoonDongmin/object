import {Movie}     from "./movie";
import {MovieType} from "./movieType";

export class Screening {
    private _movie: Movie;
    private _sequence: number;
    private _whenScreened: any;

    constructor(movie: Movie, sequence: number, whenScreened: any) {
        this._movie = movie;
        this._sequence = sequence;
        this._whenScreened = whenScreened;
    }

    public calculateFee(audienceCount: number) {
        switch (this._movie.getMovieType()) {
            case MovieType.AMOUNT_DISCOUNT:
                if (this._movie.isDiscountable(this._whenScreened, this._sequence)) {
                    return this._movie.calculateAmountDiscountedFee().times(audienceCount);
                }
                break;
            case MovieType.PERCENT_DISCOUNT:
                if (this._movie.isDiscountable(this._whenScreened, this._sequence)) {
                    return this._movie.calculatePercentDiscountedFee().times(audienceCount);
                }
                break;
            case MovieType.NONE_DISCOUNT:
                return this._movie.calculateNoneDiscountedFee().times(audienceCount);
        }
        return this._movie.calculateNoneDiscountedFee().times(audienceCount);
    }

    public getMovie(): Movie {
        return this._movie;
    }

    public setMovie(value: Movie) {
        this._movie = value;
    }

    public getSequence(): number {
        return this._sequence;
    }

    public setSequence(value: number) {
        this._sequence = value;
    }

    public getWhenScreened(): any {
        return this._whenScreened;
    }

    public setWhenScreened(value: any) {
        this._whenScreened = value;
    }
}
