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
        return new DateTimeInterval(from, LocalTime.of(toLocaleDateString(), LocalTime.of(0, 0)));
    }
}
