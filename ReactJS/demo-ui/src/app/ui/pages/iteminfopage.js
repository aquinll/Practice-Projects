import React from "react";
import PropTypes from "prop-types";

import { ItemInfo } from "../content/iteminfo";
import { InvalidInputPage } from "./invalidinputpage";

import { fixNumberText } from "../../io/events/handlers";

import { DECIMAL_POINT,
         INVALID_INPUT_TITLE,
         INVALID_NUM_ERROR,
         INVALID_NUMONLY_ERROR,
         INVALID_ITEM_ERROR1,
         INVALID_ITEM_ERROR2 } from "../../constants/stringvalues";

export class ItemInfoPage extends React.Component {

    constructor(props) {
        super(props);
        this.itemInfo = React.createRef();
        this.alertInfo1 = React.createRef();
        this.alertInfo2 = React.createRef();
        this.state = {
            toggle: props.toggle
        };
    }

    togglePopup() {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    checkValidQuantity(event) {
        if (event.target.value.includes(DECIMAL_POINT)) {
            event.target.value = event.target.value.replace(DECIMAL_POINT, "");
        }
        if (isNaN(event.target.value)) {
            fixNumberText(event.target);
            this.alertInfo2.current.togglePopup();
        }
    }

    closePopup() {
        var valid = this.itemInfo.current.checkValidInput();
        if (valid) {
            this.togglePopup();
            this.props.add(this.itemInfo.current.getItemInfo());
        } else {
            this.alertInfo1.current.togglePopup();
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.toggle && <ItemInfo ref={this.itemInfo} checkQty={(e) => this.checkValidQuantity(e)}
                                                    add={() => this.closePopup()} close={() => this.togglePopup()}/>}
                </div>
                <InvalidInputPage ref={this.alertInfo1} toggle={false} title={INVALID_INPUT_TITLE}
                                  error1={INVALID_ITEM_ERROR1} error2={INVALID_ITEM_ERROR2}/>
                <InvalidInputPage ref={this.alertInfo2} toggle={false} title={INVALID_INPUT_TITLE}
                                  error1={INVALID_NUM_ERROR} error2={INVALID_NUMONLY_ERROR}/>
            </div>
        );
    }
}

ItemInfoPage.propTypes = {
    toggle: PropTypes.bool
};