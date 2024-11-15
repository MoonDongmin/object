import {Phone}                 from "./phone";
import {Money}                 from "../money/money";
import {RegularPolicy}         from "./regularPolicy";
import {NightlyDiscountPolicy} from "./nightlyDiscountPolicy";

const phone = new Phone(new RegularPolicy(Money.wons(10), 10));

const phone2 = new Phone(new NightlyDiscountPolicy(Money.wons(10), Money.wons(10), 10));
