import React from "react";
import PropTypes from "prop-types";

export const InvalidUserInput = (props) => {
    return (
        <div className="popupBox">
            <div className="popup">
                <h3 className="textError">Invalid Input</h3>&nbsp;&nbsp;&nbsp;<span className="errorSymbol">!</span>
                <p>The Full Name and the SSS ID fields must not be empty!</p>
                <p>Kindly specify a valid user info.</p>
                <button className="simpleStyle" onClick={() => { props.close(); }} autoFocus>OK</button>
            </div>
        </div>
    );
}

InvalidUserInput.propTypes = {
    close: PropTypes.func
};