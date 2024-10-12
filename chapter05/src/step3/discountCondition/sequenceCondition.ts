import {Screening}         from "../screening";
import {DiscountCondition} from "./discountCondition";

export class SequenceCondition implements DiscountCondition {
    private sequence: number;

    constructor(sequence: number) {
        this.sequence = sequence;
    }

    public isSatisfiedBy(screening: Screening) {
        return this.sequence === screening.getSequence();
    }
}
