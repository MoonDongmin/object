import {TicketSeller} from "./TicketSeller";
import {Audience}     from "./Audience";
import {Ticket}       from "./Ticket";

export class Theater {
    private ticketSeller: TicketSeller;

    constructor(ticketSeller: TicketSeller) {
        this.ticketSeller = ticketSeller;
    }

    public enter(audience: Audience): void {
        this.ticketSeller.sellTo(audience);
    }
}

