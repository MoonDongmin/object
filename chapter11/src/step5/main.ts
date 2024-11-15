import {Phone} from "./phone";
import {TaxablePolicy} from "./taxablePolicy";
import {RegularPolicy} from "./regularPolicy";
import {Money} from "../money/money";

const phone = new Phone(new TaxablePolicy(0.05,
                new RegularPolicy((Money.wons(1000),
                    new RegularPolicy(...)))));
