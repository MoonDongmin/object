import {TicketOffice} from "./TicketOffice";
import {Audience}     from "./Audience";
import {Ticket}       from "./Ticket";

export class TicketSeller {
    private ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
        this.ticketOffice = ticketOffice;
    }


    public sellTo(audience: Audience) {
        this.ticketOffice.sellTicketTo(audience);
    }
}
