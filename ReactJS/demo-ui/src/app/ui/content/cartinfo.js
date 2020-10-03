import React from "react";

import { CartItem } from "./cartitems";

export const CartInfo = (props) => {

    var cartItems = () => {
        var cart = (
            <tr>
                <td>
                    <p>There are no available items in the cart!</p>
                </td>
            </tr>
        );
        if (props.data.length > 0) {
            cart = props.data.map((item) => <CartItem data={item} key={item.id} del={(a) => props.del(a)} />);
        }
        return cart;
    };

    var showBuyButton = () => {
        var button = (
            <tr><td></td></tr>
        );
        if (props.data.length > 0) {
            button = (
                <tr>
                    <td colSpan="3">
                        <button className="simpleStyle" onClick={() => {props.buy();}}>BUY</button>
                    </td>
                </tr>
            );
        }
        return button;
    };

    return (
        <div className="popupBoxBig">
            <div className="popup">
                <div className="exitStyle" onClick={() => {props.close();}}>X
                    <span className="tooltipStyle">Close</span>
                </div>
                <h3 className="textError">Items in the Cart</h3>&nbsp;&nbsp;&nbsp;<span className="infoSymbol">?</span>
                <div className="limiter">
                    <table>
                        <tbody>
                            {showBuyButton()}
                            {cartItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}