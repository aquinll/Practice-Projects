import React from "react";

export class MarketplacePage extends React.Component {
    render() {
        return (
            <div className="boxStyle">
                <table>
                    <tbody>
                        <tr className="rowFormat">
                            <td className="spacious">
                                <button className="simpleStyle" id="btnAddItem">Add Item</button>
                            </td>
                            <td className="spacious">
                                <button className="simpleStyle" id="btnShowCart">Cart (0)</button>
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
                                            </tr>
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