import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import { computeAreaReducer } from "./io/reducers/computeArea";
import { computeVolumeReducer } from "./io/reducers/computeVolume";
import { userDatabase } from "./io/reducers/userDatabase";

export const appStore = createStore(
    combineReducers({
            area: computeAreaReducer,
            volume: computeVolumeReducer,
            data: userDatabase
        }),
        {},
        applyMiddleware(logger)
);