export class Ticket {
    private fee: number;

    constructor(fee: number) {
        this.fee = fee;
    }

    public getFee(): number {
        return this.fee;
    }
}
