import React from "react";
import PropTypes from "prop-types";

import { InvalidInputBox } from "../content/invalidinputbox";

export class InvalidInputPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: props.toggle
        };
    }

    togglePopup() {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {
        return (
            <div>
                {this.state.toggle && <InvalidInputBox close={() => this.togglePopup()}/>}
            </div>
        );
    }
}

InvalidInputPage.propTypes = {
    toggle: PropTypes.bool
};