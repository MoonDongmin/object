import {Screening} from "../screening";

export class PeriodCondition {
    private dayOfWeek: number;
    private startTime: Date;
    private endTime: Date;

    constructor(dayOfWeek: number, startTime: Date, endTime: Date) {
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public isSatisfiedBy(screening: Screening) {
        const screeningDayOfWeek = screening.getWhenScreened().getDay();
        const screeningTime = screening.getWhenScreened();

        return this.dayOfWeek === screeningDayOfWeek &&
            this.startTime <= screeningTime &&
            this.endTime > screeningTime;
    }
}