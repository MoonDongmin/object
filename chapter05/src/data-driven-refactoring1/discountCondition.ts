import {DiscountConditionType} from "./discountConditionType";

export class DiscountCondition {
    private _type: DiscountConditionType;

    private _sequence: number;

    private _dayOfWeek: any;
    private _startTime: any;
    private _endTime: any;

    getType(): DiscountConditionType {
        return this._type;
    }

    setType(value: DiscountConditionType) {
        this._type = value;
    }

    getSequence(): number {
        return this._sequence;
    }

    setSequence(value: number) {
        this._sequence = value;
    }

    getDayOfWeek(): any {
        return this._dayOfWeek;
    }

    setDayOfWeek(value: any) {
        this._dayOfWeek = value;
    }

    getStartTime(): any {
        return this._startTime;
    }

    setStartTime(value: any) {
        this._startTime = value;
    }

    getEndTime(): any {
        return this._endTime;
    }

    setEndTime(value: any) {
        this._endTime = value;
    }
}
