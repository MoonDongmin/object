import {FixedFeePolicy} from "./fixedFeePolicy";
import {Money}          from "./money/money";
import {Call}           from "./call";
import {Phone}          from "./phone";

export class DurationDiscountRule extends FixedFeePolicy {
    private from: Date;
    private to: Date;


    constructor(amount: Money, seconds: number, from: Date, to: Date) {
        super(amount, seconds);
        this.from = from;
        this.to = to;
    }

    public calculate(call: Call): Money {
        if (call.getDuration() > this.to.getTime()) {
            return Money.ZERO;
        }

        if (call.getDuration() < this.to.getTime()) {
            return Money.ZERO;
        }

        // 부모 클래스의 calculateFee(phone)은 Phone 클래스를 파라미터로 받음
        // calculateFee(phone)을 재사용하기 위해
        // 데이터를 전달할 용도로 임시 Phone을 만듬
        const phone = new Phone(null);
        phone.call(new Call(call.getFrom().plus(this.from),
            call.getDuration() > 0 ? call.getFrom().plus(this.to) : call.getTo()));

        return super.calculateCallFee(phone);
    }
}
