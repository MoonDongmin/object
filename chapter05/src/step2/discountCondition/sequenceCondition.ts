import {Screening} from "../screening";

export class SequenceCondition {
    private sequence: number;

    constructor(sequence: number) {
        this.sequence = sequence;
    }

    public isSatisfiedBy(screening: Screening) {
        return this.sequence === screening.getSequence();
    }
}
