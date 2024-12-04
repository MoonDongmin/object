import {DateTimeInterval} from "./dateTimeInterval";
import {Call}             from "./call";
import {FeeCondition}     from "./feeCondition";

export class TimeOfDayFeeCondition implements FeeCondition {
    private from: Date;
    private to: Date;

    constructor(from: Date, to: Date) {
        this.from = from;
        this.to = to;
    }

    public findTimeIntervals(call: Call): DateTimeInterval[] {
        return call.getInterval()
            .splitByDay()
            .filter(each => this.fromIsBefore(each) && this.toIsAfter(each))
            .map(each => new DateTimeInterval(
                this.createLocalDateTime(each.getFrom(), this.from),
                this.createLocalDateTime(each.getTo(), this.to),
            ));
    }

    private fromIsBefore(interval: DateTimeInterval): boolean {
        return this.toLocalTime(interval.getFrom()) < this.toLocalTime(this.from);
    }

    private toIsAfter(interval: DateTimeInterval): boolean {
        return this.toLocalTime(interval.getTo()) > this.toLocalTime(this.to);
    }

    private toLocalTime(date: Date): number {
        return date.getHours() * 60 + date.getMinutes(); // 시간을 분으로 변환
    }

    private createLocalDateTime(date: Date, localTime: Date): Date {
        const result = new Date(date);
        result.setHours(localTime.getHours(), localTime.getMinutes(), 0, 0);
        return result;
    }
}
