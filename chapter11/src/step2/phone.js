"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const money_1 = require("../money/money");
class Phone {
    constructor(taxRate) {
        this.calls = [];
        this.taxRate = taxRate;
    }
    calculateFee() {
        let result = money_1.Money.ZERO;
        for (const call of this.calls) {
            result = result.plus(this.calculateCallFee(call));
        }
        return result.plus(result.times(this.taxRate));
    }
}
exports.Phone = Phone;
