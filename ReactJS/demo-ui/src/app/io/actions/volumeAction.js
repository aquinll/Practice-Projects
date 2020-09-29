import { COMPUTE_VOLUME_ACTION_TYPE } from "../../constants/stringvalues";

export function calculateVolume(volumePageParams) {
    return {
        type: COMPUTE_VOLUME_ACTION_TYPE,
        payload: { ...volumePageParams }
    };
}