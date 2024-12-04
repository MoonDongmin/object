import {DateTimeInterval} from "./dateTimeInterval";
import {Call}             from "./call";
import {FeeCondition}     from "./feeCondition";

export class DurationFeeCondition implements FeeCondition {
    private from: number;
    private to: number;

    constructor(from: number, to: number) {
        this.from = from;
        this.to = to;
    }

    public findTimeIntervals(call: Call): DateTimeInterval[] {
        const callDuration = call.getInterval().duration();

        if (callDuration < this.from) {
            return [];
        }

        const fromTime = new Date(call.getInterval().getFrom().getTime() + this.from);
        const toTime = callDuration > this.to ?
            new Date(call.getInterval().getFrom().getTime() + this.to) :
            call.getInterval().getTo();

        return [DateTimeInterval.of(fromTime, toTime)];
    }
}
