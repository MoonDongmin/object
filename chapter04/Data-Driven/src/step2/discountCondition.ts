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

    public isDiscountable(dayOfWeek: any, time: any): boolean | undefined {
        if (this._type != DiscountConditionType.PERIOD) {
            throw new Error("에러");
        }
        return this._dayOfWeek === dayOfWeek && this._startTime <= time && this._endTime >= time;
    }

    public isDiscountable(sequence: number): boolean | undefined {
        if (this._type != DiscountConditionType.SEQUENCE) {
            throw new Error("에러");
        }
        return this._sequence === sequence;
    }
}
