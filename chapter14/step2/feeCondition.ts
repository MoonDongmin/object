import {Call}             from "./call";
import {DateTimeInterval} from "./dateTimeInterval";

export interface FeeCondition {
    findTimeIntervals(call: Call): DateTimeInterval[];
}
