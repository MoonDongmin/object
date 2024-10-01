import {Movie}                 from "./movie";
import {Money}                 from "./money";
import {AmountDiscountPolicy}  from "./amountDiscountPolicy";
import {SequenceCondition}     from "./sequenceCondition";
import {PeriodCondition}       from "./periodCondition/periodCondition";
import {LocalTime}             from "./periodCondition/localTime";
import {PercentDiscountPolicy} from "./percentDiscountPolicy";

export enum DayOfWeek {
    SUNDAY = 0, // 일요일
    MONDAY = 1, // 월요일
    TUESDAY = 2, // 화요일
    WEDNESDAY = 3, // 수요일
    THURSDAY = 4, // 목요일
    FRIDAY = 5, // 금요일
    SATURDAY = 6  // 토요일
}

const avator: Movie = new Movie("아바타", 120, Money.wons(10000), new AmountDiscountPolicy(Money.wons(800),
    new SequenceCondition(1),
    new SequenceCondition(10),
    new PeriodCondition(DayOfWeek.MONDAY, LocalTime.of(10, 0), LocalTime.of(11, 59)),
    new PeriodCondition(DayOfWeek.THURSDAY, LocalTime.of(10, 0), LocalTime.of(20, 59))));

const titanic: Movie = new Movie("타이타닉", 180, Money.wons(11000),
    new PercentDiscountPolicy(0.1,
        new PeriodCondition(DayOfWeek.TUESDAY, LocalTime.of(14, 0), LocalTime.of(16, 59)),
        new SequenceCondition(2),
        new PeriodCondition(DayOfWeek.THURSDAY, LocalTime.of(10, 0), LocalTime.of(13, 59))));
