export class DateTimeInterval {
    private from: Date;
    private to: Date;

    constructor(from: Date, to: Date) {
        this.from = from;
        this.to = to;
    }

    public static of(from: Date, to: Date): DateTimeInterval {
        return new DateTimeInterval(from, to);
    }

    public static toMidnight(from: Date): DateTimeInterval {
        const midnight = new Date(from);
        // 자정 설정
        midnight.setHours(23, 59, 59, 999);
        return new DateTimeInterval(from, midnight);
    }

    public static fromMidnight(to: Date): DateTimeInterval {
        const midnight = new Date(to);
        midnight.setHours(0, 0, 0, 0); // 자정 설정
        return new DateTimeInterval(midnight, to);
    }

    public static during(date: Date): DateTimeInterval {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0); // 하루 시작
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999); // 하루 끝
        return new DateTimeInterval(startOfDay, endOfDay);
    }

    public duration(): number {
        return this.to.getTime() - this.from.getTime(); // 밀리초 단위 차이
    }

    public getFrom(): Date {
        return this.from;
    }

    public getTo(): Date {
        return this.to;
    }
}
