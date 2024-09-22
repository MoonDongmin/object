import {Ticket} from "./Ticket";

export class TicketOffice {
    private amount: number;
    private tickets: Ticket[] = [];

    constructor(amount: number, ...tickets: Ticket[]) {
        this.amount = amount;
        this.tickets.push(...tickets);
    }

    public getTicket(): Ticket | undefined {
        return this.tickets.shift();
    }

    public minusAmount(amount: number): void {
        this.amount -= amount;
    }

    public plusAmount(amount: number): void {
        this.amount += amount;
    }
}
