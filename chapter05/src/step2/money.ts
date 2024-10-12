export class Money {
    public static readonly ZERO: Money = Money.wons(0);
    private readonly amount: number;

    private constructor(amount: number) {
        this.amount = amount;
    }

    public static wons(amount: number): Money {
        return new Money(amount);
    }

    public plus(amount: Money): Money {
        return new Money(this.amount + amount.amount);
    }

    public minus(amount: Money): Money {
        return new Money(this.amount - amount.amount);
    }

    public times(percent: number): Money {
        return new Money(this.amount * percent);
    }

    public isLessThan(other: Money): boolean {
        return this.amount < other.amount;
    }

    public isGreaterThanOrEqual(other: Money): boolean {
        return this.amount >= other.amount;
    }
}
