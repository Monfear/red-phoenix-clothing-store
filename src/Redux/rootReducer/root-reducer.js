import { combineReducers } from "redux";

import { authReducer } from "../reducers/auth-reducer";
import { uiReducer } from "../reducers/ui-reducer";
import { cartReducer } from "../reducers/cart-reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    cart: cartReducer,
});
