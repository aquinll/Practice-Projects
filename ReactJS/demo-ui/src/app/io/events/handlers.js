import { DECIMAL_POINT } from "../../constants/stringvalues";

export function fixNumberText(obj) {
    var text = obj.value;
    var textSize = text.length;
    if (textSize === 1) {
        obj.value = "";
    }
    else {
        obj.value = text.slice(0, textSize-1);
    }
}

export function verifyNumericDecimalValue(obj) {
    var thisValue = obj.value;
    var numValue = (thisValue.includes(DECIMAL_POINT)) ? thisValue.replace(DECIMAL_POINT,"") : thisValue;

    var verified = false;
    if (isNaN(numValue)) {
        fixNumberText(obj);
    } else {
        verified = true;
    }
    return verified;
}