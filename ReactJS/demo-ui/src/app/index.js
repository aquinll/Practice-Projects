import React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { calculateArea } from "./io/actions/areaAction";
import { calculateVolume } from "./io/actions/volumeAction";
import { addUserInfo, deleteUserInfo, clearDatabase } from "./io/actions/userAction";

import { appStore } from "./myStore"
import { MyApp } from "./ui/pages/myapp";

class PracticeApp extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <MyApp { ...this.props }/>
            </BrowserRouter>
        );
    }
}

const StatePropMap = (state) => {
    return {
        areaResult: state.area,
        volumeResult: state.volume,
        database: state.data
    };
};

const DispatchPropMap = (dispatch) => {
    return {
        computeArea: (areaParams) => {
            dispatch(calculateArea(areaParams));
        },
        computeVolume: (volumeParams) => {
            dispatch(calculateVolume(volumeParams));
        },
        addUser: (userParams) => {
            dispatch(addUserInfo(userParams));
        },
        delUser: (key) => {
            dispatch(deleteUserInfo(key));
        },
        clearData: (volumeParams) => {
            dispatch(clearDatabase(volumeParams));
        }
    };
};

const ConnectedApp = connect(StatePropMap, DispatchPropMap)(PracticeApp);

render(
    <Provider store={appStore}>
        <ConnectedApp />
    </Provider>,
    window.document.getElementById("testApp")
);