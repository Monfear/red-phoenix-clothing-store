import { TEST } from "../actions/auth-actions";

const defaultState = [1, 2, 3];

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TEST:
            console.log("reducer git");
            return [...state, action.payload.item];

        default:
            console.log(`there is no action type in authReducer: ${action.type}`);
            return state;
    }
};
