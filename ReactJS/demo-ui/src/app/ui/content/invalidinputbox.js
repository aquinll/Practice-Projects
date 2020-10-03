import React from "react";
import PropTypes from "prop-types";

export const InvalidInputBox = (props) => {
    return (
        <div className="popupBox">
            <div className="popup">
                <h3 className="textError">{props.title}</h3>&nbsp;&nbsp;&nbsp;<span className="errorSymbol">!</span>
                <p>{props.error1}</p>
                <p>{props.error2}</p>
                <button className="simpleStyle" onClick={() => { props.close(); }} autoFocus>OK</button>
            </div>
        </div>
    );
}

InvalidInputBox.propTypes = {
    close: PropTypes.func,
    title: PropTypes.string,
    error1: PropTypes.string,
    error2: PropTypes.string
};