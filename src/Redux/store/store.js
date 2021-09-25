import { createStore } from "redux";

import { rootReducer } from "../rootReducer/root-reducer";

export const store = createStore(rootReducer);
