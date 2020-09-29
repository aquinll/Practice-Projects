import { COMPUTE_AREA_ACTION_TYPE } from "../../constants/stringvalues";
import { PI_VAL, AREAPAGE_RESULT_VALUES } from "../../constants/numericvalues";

export const computeAreaReducer = (areaResultParams = {AREAPAGE_RESULT_VALUES},
                                   action) => {
    areaResultParams = { ...areaResultParams };
    switch (action.type) {
        case COMPUTE_AREA_ACTION_TYPE:
            if (action.payload.areaCircle.radius !== -1) {
                areaResultParams.areaCircleResult = PI_VAL *
                                                    action.payload.areaCircle.radius *
                                                    action.payload.areaCircle.radius;
            } else {
                areaResultParams.areaCircleResult = -1;
            }
            if ((action.payload.areaEllipse.base !== -1) &&
                (action.payload.areaEllipse.altitude !== -1)) {
                areaResultParams.areaEllipseResult = PI_VAL *
                                                     action.payload.areaEllipse.base *
                                                     action.payload.areaEllipse.altitude
            } else {
                areaResultParams.areaEllipseResult = -1;
            }
            if ((action.payload.areaTriangle.base !== -1) &&
                (action.payload.areaTriangle.height !== -1)) {
                areaResultParams.areaTriangleResult = (action.payload.areaTriangle.base *
                                                       action.payload.areaTriangle.height) / 2;
            } else {
                areaResultParams.areaTriangleResult = -1;
            }
            if (action.payload.areaSquare.side !== -1) {
                areaResultParams.areaSquareResult = action.payload.areaSquare.side *
                                                    action.payload.areaSquare.side;
            } else {
                areaResultParams.areaSquareResult = -1;
            }
            if ((action.payload.areaRectangle.width !== -1) &&
                (action.payload.areaRectangle.height !== -1)) {
                areaResultParams.areaRectangleResult = action.payload.areaRectangle.width *
                                                       action.payload.areaRectangle.height;
            } else {
                areaResultParams.areaRectangleResult = -1;
            }
            break;
    }
    return areaResultParams;
}