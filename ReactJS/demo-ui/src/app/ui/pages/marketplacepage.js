import React from "react";

import { DOUBLE,
         MAX_USER_ROWS,
         MAX_EMPTY_ROWS } from "../../constants/numericvalues";

import { EmptyRow } from "../content/emptyrow";
import { ItemRow } from "../content/itemlist";

import { ItemInfoPage } from "./iteminfopage";
import { CartInfoPage } from "./cartinfopage";

export class MarketplacePage extends React.Component {

    constructor() {
        super();
        this.itemRef = React.createRef();
        this.cartRef = React.createRef();
    }

    showEmptyRows(numItems) {
        var numbers = [];
        for (var i=0; i<numItems; ++i) {
            numbers.push(i);
        }
        return numbers.map((i) => <EmptyRow key={(i*DOUBLE)} />);
    }

    listItems() {
        var items = this.props.data.items.map((item) =>
            <ItemRow data={item} key={item.id} del={(a) => this.props.deli(a)} add={(a) => this.props.addc(a)}/>
        );
        return items;
    }

    showItems() {
        var listSize = this.props.data.items.length;
        if (listSize === 0) {
            return this.showEmptyRows(MAX_EMPTY_ROWS);
        } else if (listSize < MAX_USER_ROWS) {
            var leftOver = 4 - listSize;
            return [ ...this.listItems(), ...this.showEmptyRows(leftOver) ];
        } else {
            return this.listItems();
        }
    }

    popupAddItem() {
        this.itemRef.current.togglePopup();
    }

    popupCart() {
        this.cartRef.current.togglePopup();
    }

    render() {
        return (
            <div className="boxStyle">
                <ItemInfoPage ref={this.itemRef} toggle={false} add={(a) => this.props.addi(a)} />
                <CartInfoPage ref={this.cartRef} toggle={false} data={this.props.data.cart}
                              clear={() =>this.props.rmc()} del={(a) => this.props.delc(a)} />
                <table>
                    <tbody>
                        <tr className="rowFormat">
                            <td className="spacious">
                                <button className="simpleStyle" onClick={() => this.popupAddItem()}>Add Item</button>
                            </td>
                            <td className="spacious">
                                <button className="simpleStyle" onClick={() => {this.popupCart()}}>Cart ({this.props.data.cart.length})</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="limiter">
                    <table>
                        <tbody>
                            <tr className="rowFormat">
                                <td colSpan="2">
                                    <table className="users">
                                        <tbody>
                                            <tr>
                                                <th>Item</th>
                                                <th>Brand</th>
                                                <th>Specs</th>
                                                <th>Quantity</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            {this.showItems()}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}