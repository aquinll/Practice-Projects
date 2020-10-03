import React from "react";

export const CartItem = (props) => {

    var deleteItem = (event) => {
        console.log("target: ", event.target);
        props.del(event.target.getAttribute("id"));
    };

    return (
        <tr>
            <td className="itemDesc">{props.data.name}, {props.data.brand}</td>
            <td className="itemQuantity">{props.data.quantity}</td>
            <td className="spacious">
                <button className="simpleStyle" id={props.data.id} onClick={(e) => { deleteItem(e); }}>REMOVE</button>
            </td>
        </tr>
    );
}