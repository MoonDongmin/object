import {DateTimeInterval} from "./dateTimeInterval";

export class Call {
    private interval: DateTimeInterval;

    constructor(from: Date, to: Date) {
        this.interval = DateTimeInterval.of(from, to);
    }

    public getDuration(): number {
        return this.interval.duration();
    }

    public getFrom(): Date {
        return this.interval.getFrom();
    }

    public getTo(): Date {
        return this.interval.getTo();
    };

    public getInterval(): DateTimeInterval {
        return this.interval;
    }

    public splitByDay(): DateTimeInterval[] {
        return this.interval.splitByDay();
    }
}
