"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxableRegularPhone = void 0;
const regularPhone_1 = require("./regularPhone");
class TaxableRegularPhone extends regularPhone_1.RegularPhone {
    constructor(amount, seconds, taxRate) {
        super(amount, seconds, taxRate);
        this.taxRate = taxRate;
    }
    calculateFee() {
        const fee = super.calculateFee();
        return fee.plus(fee.times(this.taxRate));
    }
}
exports.TaxableRegularPhone = TaxableRegularPhone;
