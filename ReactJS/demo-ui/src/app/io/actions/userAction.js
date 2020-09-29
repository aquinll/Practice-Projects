import { ADD_USER_ACTION_TYPE,
         DEL_USER_ACTION_TYPE,
         CEAR_DATA_ACTION_TYPE } from "../../constants/stringvalues";

export function addUserInfo(userInfo) {
    return {
        type: ADD_USER_ACTION_TYPE,
        payload: { ...userInfo }
    };
}

export function deleteUserInfo(keyId) {
    return {
        type: DEL_USER_ACTION_TYPE,
        payload: keyId
    };
}

export function clearDatabase() {
    return {
        type: CEAR_DATA_ACTION_TYPE,
        payload: { list: [] }
    };
}