export class Call {
    private from: Date;
    private to: Date;

    constructor(from: Date, to: Date) {
        this.from = from;
        this.to = to;
    }

    getDuration(): number {
        // Duration in milliseconds
        return this.to.getTime() - this.from.getTime();
    }

    getFrom(): Date {
        return this.from;
    }
}
