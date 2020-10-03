import React from "react";
import PropTypes from "prop-types";

export class ItemInfo extends React.Component {

    getItemInfo() {
        return ({
            id: "",
            name: window.document.getElementById("itemNameVal").value,
            brand: window.document.getElementById("brandVal").value,
            specs: window.document.getElementById("specsVal").value,
            quantity: parseInt(window.document.getElementById("quantityVal").value)
        });
    }

    checkValidInput() {
        var itemName = window.document.getElementById("itemNameVal").value;
        var brandName = window.document.getElementById("brandVal").value;
        var quantity = parseInt(window.document.getElementById("quantityVal").value);
        return ((itemName.length !== 0) && (brandName.length !== 0) && (quantity > 0));
    }

    render() {
        return (
            <div className="popupBoxBig">
                <div className="popup">
                    <div className="exitStyle" onClick={() => {this.props.close();}}>X
                        <span className="tooltipStyle">Close</span>
                    </div>
                    <h3 className="textError">New Item Info</h3>&nbsp;&nbsp;&nbsp;<span className="infoSymbol">?</span>
                    <table>
                        <tbody>
                        <tr>
                            <td className="paramSmallDesc">Item</td>
                            <td><input type="text" className="largeBox" maxLength="20" id="itemNameVal" autoComplete="off" autoFocus /></td>
                        </tr>
                        <tr>
                            <td className="paramSmallDesc">Brand</td>
                            <td><input type="text" className="largeBox" maxLength="30" id="brandVal" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td className="paramSmallDesc">Specs</td>
                            <td><input type="text" className="largeBox" maxLength="50" id="specsVal" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td className="paramSmallDesc">Quantity</td>
                            <td><input type="text" className="largeBox" maxLength="5" id="quantityVal" autoComplete="off"
                                       onInput={(e) => this.props.checkQty(e)}/></td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="simpleStyle" id={this.props.id} onClick={() => {this.props.add();}}>ADD</button>
                </div>
            </div>
        );
    }
}

ItemInfo.propTypes = {
    close: PropTypes.func
};