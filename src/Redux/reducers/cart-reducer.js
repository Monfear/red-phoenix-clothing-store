import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../actions/cart-actions";

const defaultState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

export const cartReducer = (state = defaultState, action) => {
    if (action.type === ADD_ITEM) {
        const existingItem = state.items.find((item) => item.id === action.payload.item.id);
        const existingItemIdx = state.items.findIndex((item) => item.id === action.payload.item.id);

        let updatedItems = [];

        if (!existingItem) {
            updatedItems = [...state.items, action.payload.item];
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + 1,
            };

            updatedItems = [...state.items];
            updatedItems[existingItemIdx] = updatedItem;
        }

        return {
            items: updatedItems,
            totalQuantity: state.totalQuantity + 1,
            totalAmount: state.totalAmount + action.payload.item.price,
        };
    } else if (action.type === REMOVE_ITEM) {
        const existingItem = state.items.find((item) => item.id === action.payload.id);
        const existingItemIdx = state.items.findIndex((item) => item.id === action.payload.id);

        if (existingItem.amount === 1) {
            return {
                items: state.items.filter((item) => item.id !== existingItem.id),
                totalQuantity: state.totalQuantity - 1,
                totalAmount: (state.totalAmount -= existingItem.price),
            };
        } else {
            const updatedItem = {
                ...existingItem,
                amount: state.items[existingItemIdx].amount - 1,
            };

            console.log("item", updatedItem.amount);
            console.log("state", state.totalQuantity);

            let updatedItems = [...state.items];
            updatedItems[existingItemIdx] = updatedItem;

            return {
                items: updatedItems,
                totalQuantity: state.totalQuantity - 1,
                totalAmount: (state.totalAmount -= updatedItem.price),
            };
        }
    } else if (action.type === CLEAR_CART) {
        return defaultState;
    } else {
        return state;
    }
};
