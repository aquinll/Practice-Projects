import { ADD_ITEM_ACTION_TYPE,
         DEL_ITEM_ACTION_TYPE,
         ADD_CARTITEM_ACTION_TYPE,
         DEL_CARTITEM_ACTION_TYPE,
         PURCHASE_ACTION_TYPE } from "../../constants/stringvalues";

export function addItemInfo(itemInfo) {
    return {
        type: ADD_ITEM_ACTION_TYPE,
        payload: { ...itemInfo }
    };
}

export function deleteItemInfo(keyId) {
    return {
        type: DEL_ITEM_ACTION_TYPE,
        payload: keyId
    };
}

export function addCartInfo(keyId) {
    return {
        type: ADD_CARTITEM_ACTION_TYPE,
        payload: keyId
    };
}

export function deleteCartInfo(keyId) {
    return {
        type: DEL_CARTITEM_ACTION_TYPE,
        payload: keyId
    };
}

export function cleanCart() {
    return {
        type: PURCHASE_ACTION_TYPE,
        payload: []
    };
}