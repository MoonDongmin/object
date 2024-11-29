import {Phone}          from "./phone";
import {TaxablePolicy}  from "./taxablePolicy";
import {FixedFeePolicy} from "./fixedFeePolicy";
import {Money}          from "./money/money";

const phone = new Phone(new TaxablePolicy(0.05,
                new FixedFeePolicy((Money.wons(1000),
                    new FixedFeePolicy(...)))));
