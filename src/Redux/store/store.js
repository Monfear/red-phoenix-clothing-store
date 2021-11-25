import { createStore, applyMiddleware } from "redux";
import { checkClearCart } from "../middlewares/checkClearCart";

import { rootReducer } from "../rootReducer/root-reducer";

export const store = createStore(rootReducer, applyMiddleware(checkClearCart));
