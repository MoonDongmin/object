"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularPhone = void 0;
const phone_1 = require("./phone");
class RegularPhone extends phone_1.Phone {
    constructor(amount, seconds, taxRate) {
        super(taxRate);
        this.amount = amount;
        this.seconds = seconds;
    }
    calculateCallFee(call) {
        const durationInSeconds = call.getDuration() / 1000; // Duration in seconds
        return this.amount.times(durationInSeconds / this.seconds);
    }
}
exports.RegularPhone = RegularPhone;
