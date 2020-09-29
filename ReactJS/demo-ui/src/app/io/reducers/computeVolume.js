import { COMPUTE_VOLUME_ACTION_TYPE } from "../../constants/stringvalues";
import { PI_VAL, VOLUMEPAGE_RESULT_VALUES } from "../../constants/numericvalues";

export const computeVolumeReducer = (volumeResultParams = {VOLUMEPAGE_RESULT_VALUES},
                                   action) => {
    volumeResultParams = { ...volumeResultParams };
    switch (action.type) {
        case COMPUTE_VOLUME_ACTION_TYPE:
            if (action.payload.volumeSphere.radius !== -1) {
                volumeResultParams.volumeSphereResult = (4 * PI_VAL *
                                                         action.payload.volumeSphere.radius *
                                                         action.payload.volumeSphere.radius *
                                                         action.payload.volumeSphere.radius) / 3;
            } else {
                volumeResultParams.volumeSphereResult = -1;
            }
            if ((action.payload.volumeCylinder.radius !== -1) &&
                (action.payload.volumeCylinder.height !== -1)) {
                volumeResultParams.volumeCylinderResult = PI_VAL *
                                                          action.payload.volumeCylinder.radius *
                                                          action.payload.volumeCylinder.radius *
                                                          action.payload.volumeCylinder.height;
            } else {
                volumeResultParams.volumeCylinderResult = -1;
            }
            if (action.payload.volumeCube.side !== -1) {
                volumeResultParams.volumeCubeResult = action.payload.volumeCube.side *
                                                      action.payload.volumeCube.side *
                                                      action.payload.volumeCube.side;
            } else {
                volumeResultParams.volumeCubeResult = -1;
            }
            if ((action.payload.volumePyramid.base !== -1) &&
                (action.payload.volumePyramid.height !== -1)) {
               volumeResultParams.volumePyramidResult = (action.payload.volumePyramid.base *
                                                         action.payload.volumePyramid.height) / 3;
            } else {
                volumeResultParams.volumePyramidResult = -1;
            }
            if ((action.payload.volumeRectPrism.width !== -1) &&
                (action.payload.volumeRectPrism.length !== -1) &&
                (action.payload.volumeRectPrism.height !== -1)) {
                volumeResultParams.volumeRectPrismResult = action.payload.volumeRectPrism.width *
                                                           action.payload.volumeRectPrism.length *
                                                           action.payload.volumeRectPrism.height;
            } else {
                volumeResultParams.volumeRectPrismResult = -1;
            }
            break;
    }
    return volumeResultParams;
}