import * as readlineSync from "readline-sync";

// 메인 함수: 작업 선택 및 실행
import {Employees} from "./employees";

function main(operation: string, args: { name?: string } = {}) {
    switch (operation) {
        case "pay":
            calculatePay(args.name!);
            break;
        case "basePays":
            console.log(`고정급 직원들의 기본급 합계: ${Employees.sumOfBasePays()}`);
            break;
        default:
            console.log("지원되지 않는 작업입니다.");
    }
}

// 급여 계산 함수
function calculatePay(name: string) {
    const taxRate = getTaxRate();
    const pay = Employees.calculatePay(name, taxRate);
    console.log(describeResult(name, pay));
}

// 세율 입력 함수
function getTaxRate(): number {
    const taxRate = readlineSync.question("세율을 입력하세요: ");
    return parseFloat(taxRate);
}

// 결과 설명 함수
function describeResult(name: string, pay: number): string {
    return `${name}의 최종 급여는 ${pay}입니다.`;
}

// 예시 호출
main("pay", {name: "직원A"});
