"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const employees = ["직원A", "직원B", "직원C"];
const basePays = [400, 300, 250];
function getTaxRage() {
    const input = readlineSync.questionInt("세율을 입력하세요: ");
    return input;
}
function calculatePayFor(name, taxRate) {
    const index = employees.indexOf(name);
    const basePay = basePays[index];
    return basePay - (basePay * taxRate);
}
function describeResult(name, pay) {
    console.log(`이름: ${name}, 급여: ${pay}`);
}
function main(name) {
    const taxRate = getTaxRage();
    const pay = calculatePayFor(name, taxRate);
    const puts = (describeResult(name, pay));
    return puts;
}
main("직원C");
