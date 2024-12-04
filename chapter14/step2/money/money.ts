export class Money {
    public static readonly ZERO = Money.wons(0);

    private amount: number;

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

    public equals(object: unknown): boolean {
        if (this === object) {
            return true;
        }
        if (!(object instanceof Money)) {
            return false;
        }
        return this.amount === object.amount;
    }

    public hashCode(): number {
        return this.amount;
    }

    public toString(): string {
        return `${this.amount}원`;
    }
}
