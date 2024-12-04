"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
class Money {
    constructor(amount) {
        this.amount = amount;
    }
    static wons(amount) {
        return new Money(amount);
    }
    plus(amount) {
        return new Money(this.amount + amount.amount);
    }
    minus(amount) {
        return new Money(this.amount - amount.amount);
    }
    times(percent) {
        return new Money(this.amount * percent);
    }
    equals(object) {
        if (this === object) {
            return true;
        }
        if (!(object instanceof Money)) {
            return false;
        }
        return this.amount === object.amount;
    }
    hashCode() {
        return this.amount;
    }
    toString() {
        return `${this.amount}원`;
    }
}
exports.Money = Money;
Money.ZERO = Money.wons(0);
