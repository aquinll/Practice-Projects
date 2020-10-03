import { ADD_ITEM_ACTION_TYPE,
         DEL_ITEM_ACTION_TYPE,
         ADD_CARTITEM_ACTION_TYPE,
         DEL_CARTITEM_ACTION_TYPE,
         PURCHASE_ACTION_TYPE } from "../../constants/stringvalues";

export const marketPost = (data = { items: [], cart: [] }, action) => {

    var marketList = { ...data };
    switch(action.type) {

        case ADD_ITEM_ACTION_TYPE:
            action.payload.id = action.payload.name + action.payload.brand + marketList.items.length.toString();
            marketList.items.push(action.payload);
            break;

        case DEL_ITEM_ACTION_TYPE:
            for (var i=0; i<marketList.items.length; ++i) {
                if (action.payload === marketList.items[i].id) {
                    marketList.items.splice(i,1);
                    break;
                }
            }
            break;

        case ADD_CARTITEM_ACTION_TYPE:
            var thisItem = -1;
            for (var i=0; i<marketList.items.length; ++i) {
                if (action.payload === marketList.items[i].id) {
                    thisItem = i;
                    --marketList.items[i].quantity;
                    if (marketList.items[i].quantity === 0) {
                        marketList.items.splice(i,1);
                    }
                    break;
                }
            }
            var foundCart = false;
            for (var j=0; j<marketList.cart.length; ++j) {
                if (action.payload === marketList.cart[j].id) {
                    foundCart = true;
                    ++marketList.cart[j].quantity;
                    break;
                }
            }
            if (!foundCart) {
                marketList.cart.push({
                    ...marketList.items[thisItem],
                    quantity: 1
                });
            }
            break;

        case DEL_CARTITEM_ACTION_TYPE:
            var thisItem = {};
            for (var j=0; j<marketList.cart.length; ++j) {
                if (action.payload === marketList.cart[j].id) {
                    thisItem = marketList.cart[j];
                    marketList.cart.splice(j,1);
                    break;
                }
            }
            var foundItem = false;
            for (var i=0; i<marketList.items.length; ++i) {
                if (action.payload === marketList.items[i].id) {
                    foundItem = true;
                    marketList.items[i].quantity += thisItem.quantity;
                    break;
                }
            }
            if (!foundItem) {
                marketList.items.push(thisItem);
            }
            break;

        case PURCHASE_ACTION_TYPE:
            marketList.cart = 0;
            marketList.cart = action.payload;
            break;
    }

    return marketList;
}