import React from "react";

import { DOUBLE,
         MAX_USER_ROWS,
         MAX_EMPTY_ROWS } from "../../constants/numericvalues";

import { EmptyRow } from "../content/emptyrow";
import { UserItem } from "../content/useritem";
import { UserInfoPage } from "./userinfopage";

export class DatabasePage extends React.Component {

    constructor() {
        super();
        this.popupAddUser = React.createRef();
    }

    showEmptyRows(numItems) {
        var numbers = [];
        for (var i=0; i<numItems; ++i) {
            numbers.push(i);
        }
        return numbers.map((i) => <EmptyRow key={(i*DOUBLE)}/>);
    }

    listUsers() {
        return this.props.data.list.map((user) =>
            <UserItem user={user} key={user.id} del={(a) => this.props.del(a)}/>
        );
    }

    showUsers() {
        var listSize = this.props.data.list.length;
        if (listSize === 0) {
            return this.showEmptyRows(MAX_EMPTY_ROWS);
        } else if (listSize < MAX_USER_ROWS) {
            var leftOver = 4 - listSize;
            return [ ...this.listUsers(), ...this.showEmptyRows(leftOver) ];
        } else {
            return this.listUsers();
        }
    }

    popAddUserInfo() {
        this.popupAddUser.current.togglePopup();
    }

    render() {
        return (
            <div className="boxStyle">
                <UserInfoPage ref={this.popupAddUser} toggle={false} add={(a) => this.props.add(a)} />
                <table>
                    <tbody>
                        <tr className="rowFormat">
                            <td className="spacious">
                                <button className="simpleStyle" onClick={() => this.popAddUserInfo()}>Add User</button>
                            </td>
                            <td className="spacious">
                                <button className="simpleStyle" onClick={() => {this.props.clear();}}>Clear Data</button>
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
                                                <th>Full Name</th>
                                                <th>SSS ID</th>
                                                <th>Age</th>
                                                <th>Occupation</th>
                                                <th>Address</th>
                                                <th>Action</th>
                                            </tr>
                                            {this.showUsers()}
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