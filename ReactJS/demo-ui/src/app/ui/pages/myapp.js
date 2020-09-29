import React from "react";
import { Route, Switch } from "react-router-dom";

import { MySideBar } from "../content/mysidebar";
import { OverviewPage } from "../content/overview";
import { AreaPage } from "./areapage";
import { VolumePage } from "./volumepage";
import { DatabasePage } from "./databasepage";
import { MarketplacePage } from "./marketplacepage";

export class MyApp extends React.Component {
    render() {
        return (
            <div>
                <div className="hdrStyle">
                    <h2>Testing ReactJS and Redux</h2>
                </div>
                <div className="tableFormat">
                    <div className="rowFormat">
                        <MySideBar />
                        <div className="cellFormat">
                            <Switch>
                                <Route path="/" exact component={OverviewPage} />
                                <Route path="/areapage" render={() => (
                                        <AreaPage result={this.props.areaResult} compute={(a) => this.props.computeArea(a)} />
                                    )}/>
                                <Route path="/volumepage" render={() => (
                                        <VolumePage result={this.props.volumeResult} compute={(a) => this.props.computeVolume(a)} />
                                    )}/>
                                <Route path="/databasepage" render={() => (
                                        <DatabasePage data={this.props.database} add={(a) => this.props.addUser(a)}
                                                      del={(a) => this.props.delUser(a)} clear={() => this.props.clearData()} />
                                    )}/>
                                <Route path="/marketplacepage" component={MarketplacePage} />
                            </Switch>
                        </div>
                    </div>
                    <div className="rowBottom">
                        <h6>
                            <p>
                                written by Marve<br/>
                                powered by ReactJS, Redux
                            </p>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}