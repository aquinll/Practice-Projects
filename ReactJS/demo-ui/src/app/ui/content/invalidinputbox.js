import React from "react";
import PropTypes from "prop-types";

export const InvalidInputBox = (props) => {
    return (
        <div className="popupBox">
            <div className="popup">
                <h3 className="textError">Invalid Input</h3>&nbsp;&nbsp;&nbsp;<span className="errorSymbol">!</span>
                <p>The input is non-numeric value!</p>
                <p>Enter only numeric value or the decimal point.</p>
                <button className="simpleStyle" onClick={() => { props.close(); }} autoFocus>OK</button>
            </div>
        </div>
    );
}

InvalidInputBox.propTypes = {
    close: PropTypes.func
};