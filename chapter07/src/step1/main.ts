import * as readlineSync from "readline-sync";

const employees = ["직원A", "직원B", "직원C"];
const basePays = [400, 300, 250];

function getTaxRage() {
    const input = readlineSync.questionInt("세율을 입력하세요: ");
    return input;
}


function calculatePayFor(name: string, taxRate: number) {
    const index = employees.indexOf(name);
    const basePay = basePays[index];
    return basePay - (basePay * taxRate);
}

function describeResult(name: string, pay: number) {
    console.log(`이름: ${name}, 급여: ${pay}`);
}

function main(name: string) {
    const taxRate: number = getTaxRage();
    const pay = calculatePayFor(name, taxRate);
    const puts = (describeResult(name, pay));

    return puts;
}

main("직원C");
