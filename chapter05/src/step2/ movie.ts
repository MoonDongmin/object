import {Screening}         from "./screening";
import {PeriodCondition}   from "./discountCondition/periodCondition";
import {SequenceCondition} from "./discountCondition/sequenceCondition";

export class Movie {
    // 문제점 발생
    private periodConditions: PeriodCondition[];
    private sequenceConditions: SequenceCondition[];

    constructor(periodConditions: PeriodCondition[], sequenceConditions: SequenceCondition[]) {
        this.periodConditions = periodConditions;
        this.sequenceConditions = sequenceConditions;
    }

    private isDiscountable(screening: Screening): boolean {
        return this.checkPeriodConditions(screening) || this.checkSequenceConditions(screening);
    }

    private checkPeriodConditions(screening: Screening): boolean {
        return this.periodConditions.some(condition => condition.isSatisfiedBy(screening));
    }

    private checkSequenceConditions(screening: Screening): boolean {
        return this.sequenceConditions.some(condition => condition.isSatisfiedBy(screening));
    }
}
