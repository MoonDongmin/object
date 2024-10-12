import {Screening}             from "../screening";
import {DiscountConditionType} from "../discountConditionType";

export class DiscountCondition {
    private type: DiscountConditionType;
    private sequence: number;
    private dayOfWeek: number;
    private startTime: Date;
    private endTime: Date;

    public isSatisfiedBy(screening: Screening) {
        if (this.type === DiscountConditionType.PERIOD) {
            return this.isSatisfiedByPeriod(screening);
        }

        return this.isSatisfiedBySequence(screening);
    }

    private isSatisfiedByPeriod(screening: Screening): boolean {
        const screeningDayOfWeek = screening.getWhenScreened().getDay();
        const screeningTime = screening.getWhenScreened();

        return this.dayOfWeek === screeningDayOfWeek &&
            this.startTime <= screeningTime &&
            this.endTime > screeningTime;
    }

    private isSatisfiedBySequence(screening: Screening): boolean {
        return this.sequence === screening.getSequence();
    }
}
