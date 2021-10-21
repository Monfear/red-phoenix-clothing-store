import { LOGIN, LOGOUT } from "../actions/auth-actions";

const defaultState = {
    token: "",
    email: "",
    isLoggedIn: false,
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log("LOGIN");

            return {
                token: action.payload.token,
                email: action.payload.email,
                isLoggedIn: true,
            };

        case LOGOUT:
            console.log("LOGOUT");

            return {
                token: "",
                email: "",
                isLoggedIn: false,
            };

        default:
            // console.log(`there is no action type in authReducer: ${action.type}`);
            return state;
    }
};
