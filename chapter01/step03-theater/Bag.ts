import {Ticket}     from "./Ticket";
import {Invitation} from "./Invitation";

export class Bag {
    private amount: number;
    private invitation: Invitation | null = null;
    private ticket: Ticket | null = null;

    constructor(amount: number);
    constructor(invitation: Invitation, amount: number);
    constructor(arg1: Invitation | number, arg2?: number) {
        if (typeof arg1 === "number") {
            this.amount = arg1;
        } else {
            this.invitation = arg1;
            this.amount = arg2 as number;
        }
    }

    public hold(ticket: Ticket | undefined): number | undefined {
        if (this.hasInvitation()) {
            if (ticket instanceof Ticket) {
                this.setTicket(ticket);
            }
            return 0;
        } else {
            if (ticket instanceof Ticket) {
                this.setTicket(ticket);
                this.minusAmount(ticket.getFee());
                return ticket.getFee();
            }

        }
    }


    public Bag(invitation: Invitation, amount: number) {
        this.invitation = invitation;
        this.amount = amount;
    }

    private hasInvitation(): boolean {
        return this.invitation != null;
    }

    private hasTicket(): boolean {
        return this.ticket != null;
    }

    private setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }


    private minusAmount(amount: number): void {
        this.amount -= amount;
    }

    private plusAmount(amount: number): void {
        this.amount += amount;
    }
}
