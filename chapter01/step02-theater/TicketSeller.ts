import {TicketOffice} from "./TicketOffice";
import {Audience}     from "./Audience";
import {Ticket}       from "./Ticket";

export class TicketSeller {
    private ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
        this.ticketOffice = ticketOffice;
    }

    // public getTicketOffice(): TicketOffice {
    //     return this.ticketOffice;
    // }

    public sellTo(audience: Audience) {
        this.ticketOffice.plusAmount(audience.buy(this.ticketOffice.getTicket()));
    }
}
