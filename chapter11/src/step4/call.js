"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
class Call {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    getDuration() {
        // Duration in milliseconds
        return this.to.getTime() - this.from.getTime();
    }
    getFrom() {
        return this.from;
    }
}
exports.Call = Call;
