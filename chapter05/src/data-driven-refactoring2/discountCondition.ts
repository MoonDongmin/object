import {DiscountConditionType} from "./discountConditionType";
import {Screening}             from "./screening";

export class DiscountCondition {
    private type: DiscountConditionType;

    private sequence: number;

    private dayOfWeek: any;
    private startTime: any;
    private endTime: any;

    public isDiscountable(screening: Screening): boolean {
        if (this.type === DiscountConditionType.PERIOD) {
            return this.isSatisfiedByPeriod(screening);
        }
        return this.isSatisfiedBySequence(screening);
    }

    private isSatisfiedBySequence(screening: Screening) {
        return this.sequence === screening.getSequence();
    }

    private isSatisfiedByPeriod(screening: Screening) {
        return screening.getWhenScreened().getDayOfWeek() === this.dayOfWeek &&
            this.startTime <= screening.getWhenScreened() &&
            this.endTime >= screening.getWhenScreened();
    }

    getType(): DiscountConditionType {
        return this.type;
    }


    getSequence(): number {
        return this.sequence;
    }

}
