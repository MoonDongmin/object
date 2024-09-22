import {TicketSeller} from "./TicketSeller";
import {Audience}     from "./Audience";
import {Ticket}       from "./Ticket";

export class Theater {
    private ticketSeller: TicketSeller;

    constructor(ticketSeller: TicketSeller) {
        this.ticketSeller = ticketSeller;
    }

    public enter(audience: Audience): void {
        if (audience.getBag().hasInvitation()) {
            const ticket: Ticket | undefined = this.ticketSeller.getTicketOffice().getTicket();
            if (ticket instanceof Ticket) {
                audience.getBag().setTicket(ticket);
            }
        } else {
            const ticket: Ticket | undefined = this.ticketSeller.getTicketOffice().getTicket();
            if (ticket instanceof Ticket) {
                audience.getBag().minusAmount(ticket.getFee());
                this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
                audience.getBag().setTicket(ticket);
            }
        }
    }
}

