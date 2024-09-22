import {Ticket}   from "./Ticket";
import {Audience} from "./Audience";

export class TicketOffice {
    private amount: number;
    private tickets: Ticket[] = [];

    constructor(amount: number, ...tickets: Ticket[]) {
        this.amount = amount;
        this.tickets.push(...tickets);
    }

    public sellTicketTo(audience: Audience) {
        this.plusAmount(audience.buy(this.getTicket()));
    }

    private getTicket(): Ticket | undefined {
        return this.tickets.shift();
    }

    private minusAmount(amount: number): void {
        this.amount -= amount;
    }

    private plusAmount(amount: number | undefined): void {
        // @ts-ignore
        this.amount += amount;
    }
}
