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


    public Bag(invitation: Invitation, amount: number) {
        this.invitation = invitation;
        this.amount = amount;
    }

    public hasInvitation(): boolean {
        return this.invitation != null;
    }

    public hasTicket(): boolean {
        return this.ticket != null;
    }

    public setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }


    public minusAmount(amount: number): void {
        this.amount -= amount;
    }

    public plusAmount(amount: number): void {
        this.amount += amount;
    }
}
