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

    public splitByDay(): DateTimeInterval[] {
        const days = this.days();

        if (days > 0) {
            return this.splitByDayRange(days);
        }

        return [DateTimeInterval.of(this.from, this.to)];
    }

    private days(): number {
        const startOfDayFrom = new Date(this.from);
        startOfDayFrom.setHours(0, 0, 0, 0);

        const startOfDayTo = new Date(this.to);
        startOfDayTo.setHours(0, 0, 0, 0);

        const diff = startOfDayTo.getTime() - startOfDayFrom.getTime();
        return diff / (1000 * 60 * 60 * 24); // 하루 단위로 차이 계산
    }

    private splitByDayRange(days: number): DateTimeInterval[] {
        const result: DateTimeInterval[] = [];
        this.addFirstDay(result);
        this.addMiddleDays(result, days);
        this.addLastDay(result);
        return result;
    }

    private addFirstDay(result: DateTimeInterval[]): void {
        result.push(DateTimeInterval.toMidnight(this.from));
    }

    private addMiddleDays(result: DateTimeInterval[], days: number): void {
        for (let loop = 1; loop < days; loop++) {
            const currentDate = new Date(this.from);
            currentDate.setDate(currentDate.getDate() + loop);
            result.push(DateTimeInterval.during(currentDate));
        }
    }


    private addLastDay(result: DateTimeInterval[]): void {
        result.push(DateTimeInterval.fromMidnight(this.to));
    }
}
