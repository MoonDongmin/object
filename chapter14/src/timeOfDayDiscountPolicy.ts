import {Money}            from "./money/money";
import {Call}             from "./call";
import {DateTimeInterval} from "./dateTimeInterval";


export class TimeOfDayDiscountPolicy {
    private starts: Date[] = [];
    private ends: Date[] = [];
    private durations: number[] = []; // 초 단위 지속 시간
    private amounts: Money[] = [];

    public calculateCallFee(call: Call): Money {
        let result = Money.ZERO;

        for (const interval of call.getInterval().splitByDay()) {
            for (let loop = 0; loop < this.starts.length; loop++) {
                const startInterval = this.from(interval, this.starts[loop]);
                const endInterval = this.to(interval, this.ends[loop]);

                const timeBetweenSeconds = (endInterval.getTime() - startInterval.getTime()) / 1000;

                if (timeBetweenSeconds > 0) {
                    result = result.plus(
                        this.amounts[loop].times(timeBetweenSeconds / this.durations[loop]),
                    );
                }
            }
        }

        return result;
    }

    private from(interval: DateTimeInterval, from: Date): Date {
        return interval.getFrom() > from ? interval.getFrom() : from;
    }

    private to(interval: DateTimeInterval, to: Date): Date {
        return interval.getTo() < to ? interval.getTo() : to;
    }
}
