import {Money} from "./money/money";
import {Call}  from "./call";


export class FixedFeePolicy {
    private amount: Money; // 고정 요금
    private seconds: number; // 기준 시간 (초 단위)

    constructor(amount: Money, seconds: number) {
        this.amount = amount;
        this.seconds = seconds; // 초 단위
    }

    protected calculateCallFee(call: Call): Money {
        const callDurationSeconds = call.getDuration() / 1000; // getDuration()은 밀리초 반환
        return this.amount.times(callDurationSeconds / this.seconds);
    }
}
