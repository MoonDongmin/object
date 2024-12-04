import {DateTimeInterval} from "./dateTimeInterval";
import {Call}             from "./call";
import {FeeCondition}     from "./feeCondition";

export class DayOfWeekFeeCondition implements FeeCondition {
    private dayOfWeeks: number[];

    constructor(...dayOfWeeks: number[]) {
        this.dayOfWeeks = dayOfWeeks;
    }

    public findTimeIntervals(call: Call): DateTimeInterval[] {
        return call.getInterval()
            .splitByDay()
            .filter(each => this.dayOfWeeks.includes(this.getDayOfWeek(each.getFrom())))
            .map(each => each);
    }

    private getDayOfWeek(date: Date): number {
        return (date.getDay() + 1) % 7 || 7;
    }
}
