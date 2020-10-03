import React from "react";

export const UserItem = (props) => {

    const deleteUser = (event) => {
        props.del(event.target.getAttribute("id"));
    };

    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.sssId}</td>
            <td>{props.user.age}</td>
            <td>{props.user.occupation}</td>
            <td>{props.user.address}</td>
            <td><button className="simpleStyle" id={props.user.id} onClick={(e) => {deleteUser(e);}}>Delete</button></td>
        </tr>
    );
}