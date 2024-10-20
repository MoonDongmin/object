export class Employees {
    private static employees: string[] = ["직원A", "직원B", "직원C", "직원D", "직원E", "직원F"];
    private static basePays: number[] = [400, 300, 250, 1, 1, 1.5];
    private static hourlys: boolean[] = [false, false, false, true, true, true];
    private static timeCards: number[] = [0, 0, 0, 120, 120, 120];

    // 급여 계산 메서드
    public static calculatePay(name: string, taxRate: number): number {
        if (this.hourly(name)) {
            return this.calculateHourlyPayFor(name, taxRate);
        } else {
            return this.calculatePayFor(name, taxRate);
        }
    }

    // 시간제 여부 확인 메서드
    private static hourly(name: string): boolean {
        const index = this.employees.indexOf(name);
        if (index === -1) throw new Error(`${name}은(는) 존재하지 않습니다.`);
        return this.hourlys[index];
    }

    // 시간제 급여 계산
    private static calculateHourlyPayFor(name: string, taxRate: number): number {
        const index = this.employees.indexOf(name);
        if (index === -1) throw new Error(`${name}은(는) 존재하지 않습니다.`);

        const basePay = this.basePays[index] * this.timeCards[index];
        return basePay - (basePay * taxRate);
    }

    // 고정 급여 계산
    private static calculatePayFor(name: string, taxRate: number): number {
        const index = this.employees.indexOf(name);
        if (index === -1) throw new Error(`${name}은(는) 존재하지 않습니다.`);

        const basePay = this.basePays[index];
        return basePay - (basePay * taxRate);
    }

    public static sumOfBasePays(): number {
        let result = 0;

        for (let i = 0; i < this.employees.length; i++) {
            const name = this.employees[i];
            if (!this.hourly(name)) { // 시간제가 아닌 경우
                result += this.basePays[i];
            }
        }

        return result;
    }
}
