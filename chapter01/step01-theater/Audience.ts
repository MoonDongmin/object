import {Bag} from "./Bag";

export class Audience {
    private bag: Bag;

    constructor(bag: Bag) {
        this.bag = bag;
    }

    public getBag(): Bag {
        return this.bag;
    }
}
