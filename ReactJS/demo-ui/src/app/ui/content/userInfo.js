import React from "react";
import PropTypes from "prop-types";

export class UserInfo extends React.Component {

    getUserInfo() {
        var age = window.document.getElementById("userAgeVal").value;
        return ({
            id: "",
            name: window.document.getElementById("userNameVal").value,
            sssId: window.document.getElementById("sssIdVal").value,
            age: (age !== "") ? parseInt(window.document.getElementById("userAgeVal").value) : "-",
            occupation: window.document.getElementById("occupationVal").value,
            address: window.document.getElementById("addressVal").value,
        });
    }

    checkValidInput() {
        var fullName = window.document.getElementById("userNameVal").value;
        var sssId = window.document.getElementById("sssIdVal").value;
        return ((fullName.length !== 0) && (sssId.length !== 0));
    }

    render() {
        return (
            <div className="popupBoxBig">
                <div className="popup">
                    <div className="exitStyle" onClick={() => { this.props.close(); }}>X
                        <span className="tooltipStyle">Close</span>
                    </div>
                    <h3 className="textError">User Info</h3>&nbsp;&nbsp;&nbsp;<span className="infoSymbol">?</span>
                    <table>
                        <tbody>
                        <tr>
                            <td className="paramSmallDesc">Full Name</td>
                            <td><input type="text" className="largeBox" maxLength="20" id="userNameVal" autoComplete="off" autoFocus /></td>
                        </tr>
                        <tr>
                            <td className="paramSmallDesc">SSS ID</td>
                            <td><input type="text" className="largeBox" maxLength="10" id="sssIdVal" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td className="paramSmallDesc">Age</td>
                            <td><input type="text" className="smallBox" maxLength="3" id="userAgeVal" autoComplete="off"
                                       onInput={(e) => this.props.checkAge(e)}/></td>
                        </tr>
                        <tr>
                            <td className="paramSmallDesc">Occupation</td>
                            <td><input type="text" className="largeBox" maxLength="20" id="occupationVal" autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <td className="paramSmallDesc">Address</td>
                            <td><input type="text" className="largeBox" maxLength="50" id="addressVal" autoComplete="off" /></td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="simpleStyle" onClick={() => { this.props.add(); }}>ADD</button>
                </div>
            </div>
        );
    }
}

UserInfo.propTypes = {
    close: PropTypes.func
};