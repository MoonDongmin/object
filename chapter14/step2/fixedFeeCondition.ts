import {FeeCondition}     from "./feeCondition";
import {DateTimeInterval} from "./dateTimeInterval";
import {Call}             from "./call";

export class FixedFeeCondition implements FeeCondition {
    public findTimeIntervals(call: Call): DateTimeInterval[] {
        return [call.getInterval()];
    }
}
