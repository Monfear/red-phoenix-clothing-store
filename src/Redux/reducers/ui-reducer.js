import { START_LOAD, END_LOAD } from "./../actions/ui-actions";

const defaultState = {
    isLoading: false,
};

export const uiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case START_LOAD:
            return {
                ...state,
                isLoading: true,
            };

        case END_LOAD: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            console.log(`there is no action type in uiReducer: ${action.type}`);
            return {
                ...state,
            };
    }
};
