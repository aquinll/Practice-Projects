import React from "react";

import { verifyNumericDecimalValue } from "../../io/events/handlers";
import { InvalidInputPage } from "./invalidinputpage";

import { PI_VAL } from "../../constants/numericvalues";
import { INVALID_INPUT_TITLE,
         INVALID_NUM_ERROR,
         INVALID_NUMDEC_ERROR } from "../../constants/stringvalues";

export class VolumePage extends React.Component {

    constructor() {
        super();
        this.alertPopupRef = React.createRef();
    }

    onTextChange(event) {
        if (!verifyNumericDecimalValue(event.target)) {
            this.alertPopupRef.current.togglePopup();
        }
    }

    performCompute() {
        var sphereRadiusVal = window.document.getElementById("sphereRadiusVal").value;
        var cylinderRadiusVal = window.document.getElementById("cylinderRadiusVal").value;
        var cylinderHeightVal = window.document.getElementById("cylinderHeightVal").value;
        var cubeSideVal = window.document.getElementById("cubeSideVal").value;
        var pyramidBaseVal = window.document.getElementById("pyramidBaseVal").value;
        var pyramidHeightVal = window.document.getElementById("pyramidHeightVal").value;
        var rectPrismWidthVal = window.document.getElementById("rectPrismWidthVal").value;
        var rectPrismLengthVal = window.document.getElementById("rectPrismLengthVal").value;
        var rectPrismHeightVal = window.document.getElementById("rectPrismHeightVal").value;

        this.props.compute({
            volumeSphere: {
                radius: (sphereRadiusVal.length !== 0) ? sphereRadiusVal : -1
            },
            volumeCylinder: {
                radius: (cylinderRadiusVal.length !== 0) ? cylinderRadiusVal : -1,
                height: (cylinderHeightVal.length !== 0) ? cylinderHeightVal : -1
            },
            volumeCube: {
                side: (cubeSideVal.length !== 0) ? cubeSideVal : -1
            },
            volumePyramid: {
                base: (pyramidBaseVal.length !== 0) ? pyramidBaseVal : -1,
                height: (pyramidHeightVal.length !== 0) ? pyramidHeightVal : -1
            },
            volumeRectPrism: {
                width: (rectPrismWidthVal.length !== 0) ? rectPrismWidthVal : -1,
                length: (rectPrismLengthVal.length !== 0) ? rectPrismLengthVal : -1,
                height: (rectPrismHeightVal.length !== 0) ? rectPrismHeightVal : -1
            }
        });
    }

    componentDidUpdate() {
        window.document.getElementById("volumeSphereResult").textContent = (this.props.result.volumeSphereResult !== -1) ?
                                                                            this.props.result.volumeSphereResult : "";
        window.document.getElementById("volumeCylinderResult").textContent = (this.props.result.volumeCylinderResult !== -1) ?
                                                                              this.props.result.volumeCylinderResult : "";
        window.document.getElementById("volumeCubeResult").textContent = (this.props.result.volumeCubeResult !== -1) ?
                                                                          this.props.result.volumeCubeResult : "";
        window.document.getElementById("volumePyramidResult").textContent = (this.props.result.volumePyramidResult !== -1) ?
                                                                             this.props.result.volumePyramidResult : "";
        window.document.getElementById("volumeRectPrismResult").textContent = (this.props.result.volumeRectPrismResult !== -1) ?
                                                                               this.props.result.volumeRectPrismResult : "";
    }

    render() {
        return (
            <div className="boxStyle">
                <InvalidInputPage ref={this.alertPopupRef} toggle={false} title={INVALID_INPUT_TITLE}
                                      error1={INVALID_NUM_ERROR} error2={INVALID_NUMDEC_ERROR}/>
                <table>
                    <tbody>
                        <tr>
                            <td className="measureDesc">Volume of the sphere:</td>
                            <td className="paramDesc">radius</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="sphereRadiusVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="paramSmallDesc" colSpan="3">PI</td>
                            <td>
                                <label className="mediumBox">{PI_VAL}</label>
                            </td>
                            <td className="textRight">
                                <div id="volumeSphereResult"></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="measureDesc">Volume of the cylinder:</td>
                            <td className="paramDesc">radius</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="cylinderRadiusVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="paramDesc">height</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="cylinderHeightVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="paramSmallDesc">PI</td>
                            <td>
                                <label className="mediumBox">{PI_VAL}</label>
                            </td>
                            <td className="textRight">
                                <div id="volumeCylinderResult"></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="measureDesc">Volume of the cube:</td>
                            <td className="paramDesc">side</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="cubeSideVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td colSpan="5" className="textRight">
                                <div id="volumeCubeResult"></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="measureDesc">Volume of the pyramid:</td>
                            <td className="paramDesc">base</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="pyramidBaseVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="paramDesc">height</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="pyramidHeightVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="textRight" colSpan="3">
                                <div id="volumePyramidResult"></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="measureDesc">Volume of the rectangular prism:</td>
                            <td className="paramDesc">width</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="rectPrismWidthVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="paramDesc">length</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="rectPrismLengthVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="paramDesc">height</td>
                            <td>
                                <input type="text" className="smallBox" maxLength="6" id="rectPrismHeightVal"
                                 autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                            </td>
                            <td className="textRight">
                                <div id="volumeRectPrismResult"></div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="8">
                                <button className="simpleStyle" id="btnVolumeCompute"
                                        onClick={() => this.performCompute()}>Compute</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}