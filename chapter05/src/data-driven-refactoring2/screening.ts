import {Movie} from "./movie";

export class Screening {
    private _movie: Movie;
    private _sequence: number;
    private _whenScreened: any;

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
