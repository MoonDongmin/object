import {TicketOffice} from "./TicketOffice";

export class TicketSeller {
    private ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
        this.ticketOffice = ticketOffice;
    }

    public getTicketOffice(): TicketOffice {
        return this.ticketOffice;
    }
}
