import {Bag}    from "./Bag";
import {Ticket} from "./Ticket";

export class Audience {
    private bag: Bag;

    constructor(bag: Bag) {
        this.bag = bag;
    }

    // public getBag(): Bag {
    //     return this.bag;
    // }

    public buy(ticket: Ticket | undefined): number | undefined {
        if (this.bag.hasInvitation()) {
            if (ticket) {
                this.bag.setTicket(ticket);
            }
            return 0;
        } else {
            if (ticket) {
                this.bag.setTicket(ticket);
                this.bag.minusAmount(ticket.getFee());
                return ticket.getFee();
            }

        }
    }
}
