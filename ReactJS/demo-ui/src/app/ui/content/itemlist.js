import React from "react";

import { ZERO_SUFFIX } from "../../constants/stringvalues";

export const ItemRow = (props) => {

    const deleteItem = (event) => {
        console.log("target: ", event.target);
        props.del(event.target.getAttribute("id"));
    };

    const addCart = (event) => {
        var key = event.target.getAttribute("id");
        console.log("key: ", key);
        props.add(key.replace(ZERO_SUFFIX, ""));
    };

    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.brand}</td>
            <td>{props.data.specs}</td>
            <td>{props.data.quantity}</td>
            <td><button className="simpleStyle" id={props.data.id} onClick={(e) => {deleteItem(e);}}>Delete</button></td>
            <td><button className="simpleStyle" id={props.data.id+ZERO_SUFFIX} onClick={(e) => {addCart(e);}}>Add Cart</button></td>
        </tr>
    );
}