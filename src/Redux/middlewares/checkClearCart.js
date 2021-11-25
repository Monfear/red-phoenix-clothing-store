import { CLEAR_CART } from "../actions/cart-actions";

export const checkClearCart = (store) => (next) => (action) => {
    if (action.type === CLEAR_CART) {
        console.warn("cart has been cleared");
    }

    next(action);
};
