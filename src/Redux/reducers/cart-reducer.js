import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../actions/cart-actions";

const defaultState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log(state);
            return {
                items: [...state.items, action.payload.item],
                totalQuantity: state.totalQuantity + 1,
                totalAmount: state.totalAmount + action.payload.item.price,
            };

        case CLEAR_CART:
            return defaultState;

        default:
            return state;
    }
};
