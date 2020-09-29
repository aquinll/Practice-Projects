import { COMPUTE_AREA_ACTION_TYPE } from "../../constants/stringvalues";

export function calculateArea(areaPageParams) {
    return {
        type: COMPUTE_AREA_ACTION_TYPE,
        payload: { ...areaPageParams }
    };
}