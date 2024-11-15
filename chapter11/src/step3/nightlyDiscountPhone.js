"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightlyDiscountPhone = void 0;
const phone_1 = require("./phone");
const LATE_NIGHT_HOUR = 22;
class NightlyDiscountPhone extends phone_1.Phone {
    constructor(nightlyAmount, regularAmount, seconds, taxRate) {
        super(taxRate);
        this.nightlyAmount = nightlyAmount;
        this.regularAmount = regularAmount;
        this.seconds = seconds;
    }
    calculateCallFee(call) {
        const durationInSeconds = call.getDuration() / 1000; // Duration in seconds
        if (call.getFrom().getHours() >= LATE_NIGHT_HOUR) {
            return this.nightlyAmount.times(durationInSeconds / this.seconds);
        }
        else {
            return this.regularAmount.times(durationInSeconds / this.seconds);
        }
    }
}
exports.NightlyDiscountPhone = NightlyDiscountPhone;
