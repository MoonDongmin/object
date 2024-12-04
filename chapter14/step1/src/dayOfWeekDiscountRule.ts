import {Money}            from "./money/money";
import {DateTimeInterval} from "./dateTimeInterval";

export class DayOfWeekDiscountRule {
    private dayOfWeeks: number[];
    private duration: number;
    private amount: Money;

    constructor(dayOfWeeks: number[], duration: number, amount: Money) {
        this.dayOfWeeks = dayOfWeeks;
        this.duration = duration;
        this.amount = amount;
    }

    public calculate(interval: DateTimeInterval): Money {
        const dayOfWeek = interval.getFrom().getDay();
        if (this.dayOfWeeks.includes(dayOfWeek)) {
            const intervalDurationSeconds = interval.duration() / 1000;
            const durationSeconds = this.duration;

            return this.amount.times(intervalDurationSeconds / durationSeconds);
        }
        return Money.ZERO;
    }
}
