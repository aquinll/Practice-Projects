import { ADD_USER_ACTION_TYPE,
         DEL_USER_ACTION_TYPE,
         CEAR_DATA_ACTION_TYPE } from "../../constants/stringvalues";

export const userDatabase = (userInfo = { list: [] }, action) => {

    var userData = { ...userInfo };
    switch(action.type) {

        case ADD_USER_ACTION_TYPE:
            action.payload.id = action.payload.sssId + userData.list.length.toString();
            userData.list.push(action.payload);
            break;

        case DEL_USER_ACTION_TYPE:
            for (var i=0; i<userData.list.length; ++i) {
                if (action.payload === userData.list[i].id) {
                    userData.list.splice(i,1);
                    break;
                }
            }
            break;

        case CEAR_DATA_ACTION_TYPE:
            userData.length = 0;
            userData = action.payload;
            break;
    }

    return userData;
}