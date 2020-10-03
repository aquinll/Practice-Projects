import React from "react";
import PropTypes from "prop-types";

import { CartInfo } from "../content/cartinfo";

export class CartInfoPage extends React.Component {

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
                <div>
                    {this.state.toggle && <CartInfo data={this.props.data} buy={() => this.props.clear()}
                                                    close={() => this.togglePopup()} del={(a) => this.props.del(a)} />}
                </div>
            </div>
        );
    }
}

CartInfoPage.propTypes = {
    toggle: PropTypes.bool
};