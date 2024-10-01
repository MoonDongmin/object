import {LocalTime}         from "./localTime";
import {Screening}         from "../screening";
import {DiscountCondition} from "../discountCondition";

export class PeriodCondition implements DiscountCondition {
    private dayOfWeek: number;
    private startTime: LocalTime;
    private endTime: LocalTime;

    constructor(dayOfWeek: number, startTime: LocalTime, endTime: LocalTime) {
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public isSatisfiedBy(screening: Screening): boolean {
        const screeningDate = screening.getStartTime();
        const screeningDayOfWeek = screeningDate.getDay();

        const isoDayOfWeek = (screeningDayOfWeek === 0) ? 7 : screeningDayOfWeek;

        // screeningTime을 LocalTime을 통해 계산
        const screeningTime = new LocalTime(screeningDate.getHours(), screeningDate.getMinutes()).toMinutes();
        const conditionStartTime = this.startTime.toMinutes();
        const conditionEndTime = this.endTime.toMinutes();

        return (
            isoDayOfWeek === this.dayOfWeek &&
            screeningTime >= conditionStartTime &&
            screeningTime <= conditionEndTime
        );
    }
}
