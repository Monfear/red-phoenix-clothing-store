import { combineReducers } from "redux";

import { authReducer } from "../reducers/auth-reducer";
import { uiReducer } from "../reducers/ui-reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
});
