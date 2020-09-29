import { DECIMAL_POINT } from "../../constants/stringvalues";

export function verifyNumericValue(obj) {
    var thisValue = obj.value;
    var thisValueSize = thisValue.length;
    var numValue = (thisValue.includes(DECIMAL_POINT)) ? thisValue.replace(".","") : thisValue;

    var verified = false;
    if (isNaN(numValue)) {
        if (thisValueSize === 1) {
            obj.value = "";
        }
        else {
            obj.value = thisValue.slice(0, thisValueSize-1);
        }
    } else {
        verified = true;
    }
    return verified;
}