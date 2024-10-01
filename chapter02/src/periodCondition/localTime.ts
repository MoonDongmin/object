export class LocalTime {
    private hours: number;
    private minutes: number;

    constructor(hours: number, minutes: number) {
        this.hours = hours;
        this.minutes = minutes;
    }

    public static of(hours: number, minutes: number): LocalTime {
        return new LocalTime(hours, minutes);
    }

    public toMinutes(): number {
        return this.hours * 60 + this.minutes;
    }
}
