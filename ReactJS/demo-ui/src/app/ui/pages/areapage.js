import React from "react";

import { verifyNumericDecimalValue } from "../../io/events/handlers";
import { InvalidInputPage } from "./invalidinputpage";

import { PI_VAL } from "../../constants/numericvalues";
import { INVALID_INPUT_TITLE,
         INVALID_NUM_ERROR,
         INVALID_NUMDEC_ERROR } from "../../constants/stringvalues";

export class AreaPage extends React.Component {

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
        var circleRadiusVal = window.document.getElementById("circleRadiusVal").value;
        var ellipseBaseVal = window.document.getElementById("ellipseBaseVal").value;
        var ellipseAltitudeVal = window.document.getElementById("ellipseAltitudeVal").value;
        var triangleBaseVal = window.document.getElementById("triangleBaseVal").value;
        var triangleHeightVal = window.document.getElementById("triangleHeightVal").value;
        var squareSideVal = window.document.getElementById("squareSideVal").value;
        var rectWidthVal = window.document.getElementById("rectWidthVal").value;
        var rectHeightVal = window.document.getElementById("rectHeightVal").value;

        this.props.compute({
            areaCircle: {
                radius: (circleRadiusVal.length !== 0) ? circleRadiusVal : -1
            },
            areaEllipse: {
                base: (ellipseBaseVal.length !== 0) ? ellipseBaseVal : -1,
                altitude: (ellipseAltitudeVal.length !== 0) ? ellipseAltitudeVal : -1
            },
            areaTriangle: {
                base: (triangleBaseVal.length !== 0) ? triangleBaseVal : -1,
                height: (triangleHeightVal.length !== 0) ? triangleHeightVal : -1
            },
            areaSquare: {
                side: (squareSideVal.length !== 0) ? squareSideVal : -1,
            },
            areaRectangle: {
                width: (rectWidthVal.length !== 0) ? rectWidthVal : -1,
                height: (rectHeightVal.length !== 0) ? rectHeightVal : -1
            }
        });
    }

    componentDidUpdate() {
        window.document.getElementById("areaCircleResult").textContent = (this.props.result.areaCircleResult !== -1) ?
                                                                          this.props.result.areaCircleResult : "";
        window.document.getElementById("areaEllipseResult").textContent = (this.props.result.areaEllipseResult !== -1) ?
                                                                           this.props.result.areaEllipseResult : "";
        window.document.getElementById("areaTriangleResult").textContent = (this.props.result.areaTriangleResult !== -1) ?
                                                                            this.props.result.areaTriangleResult : "";
        window.document.getElementById("areaSquareResult").textContent = (this.props.result.areaSquareResult !== -1) ?
                                                                          this.props.result.areaSquareResult : "";
        window.document.getElementById("areaRectangleResult").textContent = (this.props.result.areaRectangleResult !== -1) ?
                                                                             this.props.result.areaRectangleResult : "";
    }

    render() {
        return (
                <div className="boxStyle">
                    <InvalidInputPage ref={this.alertPopupRef} toggle={false} title={INVALID_INPUT_TITLE}
                                      error1={INVALID_NUM_ERROR} error2={INVALID_NUMDEC_ERROR}/>
                    <table>
                        <tbody>
                            <tr>
                                <td className="measureDesc">Area of the circle:</td>
                                <td className="paramDesc">radius</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="circleRadiusVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td className="paramSmallDesc" colSpan="3">PI</td>
                                <td>
                                    <label className="mediumBox">{PI_VAL}</label>
                                </td>
                                <td className="textRight">
                                    <div id="areaCircleResult"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="measureDesc">Area of the ellipse:</td>
                                <td className="paramDesc">base</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="ellipseBaseVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td className="paramDesc">altitude</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="ellipseAltitudeVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td className="paramSmallDesc">PI</td>
                                <td>
                                    <label className="mediumBox">{PI_VAL}</label>
                                </td>
                                <td className="textRight">
                                    <div id="areaEllipseResult"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="measureDesc">Area of the triangle:</td>
                                <td className="paramDesc">base</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="triangleBaseVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td className="paramDesc">height</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="triangleHeightVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td colSpan="3" className="textRight">
                                    <div id="areaTriangleResult"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="measureDesc">Area of the square:</td>
                                <td className="paramDesc">side</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="squareSideVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td colSpan="5" className="textRight">
                                    <div id="areaSquareResult"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="measureDesc">Area of the rectangle:</td>
                                <td className="paramDesc">width</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="rectWidthVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td className="paramDesc">height</td>
                                <td>
                                    <input type="text" className="smallBox" maxLength="6" id="rectHeightVal"
                                           autoComplete="off" onInput={(e) => this.onTextChange(e)}/>
                                </td>
                                <td colSpan="3" className="textRight">
                                    <div id="areaRectangleResult"></div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="8">
                                    <button className="simpleStyle" id="btnAreaCompute"
                                            onClick={() => this.performCompute()}>Compute</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
    }
}