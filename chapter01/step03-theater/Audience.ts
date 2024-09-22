import {Bag}    from "./Bag";
import {Ticket} from "./Ticket";

export class Audience {
    private bag: Bag;

    constructor(bag: Bag) {
        this.bag = bag;
    }

    public buy(ticket: Ticket | undefined): number | undefined {
       return this.bag.hold(ticket);
    }
}
