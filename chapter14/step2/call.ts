import {DateTimeInterval} from "./dateTimeInterval";

export class Call {
    private interval: DateTimeInterval;

    constructor(from: Date, to: Date) {
        this.interval = DateTimeInterval.of(from, to);
    }

    public getDuration(): number {
        // Duration을 밀리초 단위의 숫자로 반환
        return this.interval.duration();
    }

    public getFrom(): Date {
        return this.interval.getFrom();
    }

    public getTo(): Date {
        return this.interval.getTo();
    }

    public getInterval(): DateTimeInterval {
        return this.interval;
    }

    public splitByDay(): DateTimeInterval[] {
        return this.interval.splitByDay();
    }
}
