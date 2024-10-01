import {DiscountCondition} from "./discountCondition";
import {Screening}         from "./screening";

export class SequenceCondition implements DiscountCondition {
    private sequence: number;

    constructor(sequence: number) {
        this.sequence = sequence;
    }

    public isSatisfiedBy(screening: Screening): boolean {
        return screening.isSequence(this.sequence);
    }
}
