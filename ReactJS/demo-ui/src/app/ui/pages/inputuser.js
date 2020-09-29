import React from "react";
import PropTypes from "prop-types";

import { InputUserInfo } from "./inputuserinfo";
import { InvalidUserInput } from "../content/invaliduserinfo";

export class InputUserInfoPage extends React.Component {

    constructor(props) {
        super(props);
        this.userInfo = React.createRef();
        this.state = {
            toggle: props.toggle,
            showError: false
        };
    }

    togglePopup() {
        this.setState({
            ...this.state,
            toggle: !this.state.toggle
        });
    }

    toggleError() {
        this.setState({
            ...this.state,
            showError: !this.state.showError
        });
    }

    closePopup() {
        var valid = this.userInfo.current.checkValidInput();
        if (valid) {
            this.togglePopup();
            this.props.add(this.userInfo.current.getUserInfo());
        } else {
            this.toggleError();
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.toggle && <InputUserInfo ref={this.userInfo}
                                                         add={() => this.closePopup()} close={() => this.togglePopup()}/>}
                </div>
                <div>
                    {this.state.showError && <InvalidUserInput close={() => this.toggleError()}/>}
                </div>
            </div>
        );
    }
}

InputUserInfoPage.propTypes = {
    toggle: PropTypes.bool
};