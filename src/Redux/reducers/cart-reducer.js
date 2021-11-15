import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../actions/cart-actions";

const defaultState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const existingItemAdd = state.items.find((item) => item.id === action.payload.item.id);
            const existingItemAddIdx = state.items.findIndex((item) => item.id === action.payload.item.id);

            let updatedItems = null;

            if (!existingItemAdd) {
                updatedItems = [...state.items, action.payload.item];
            } else {
                const updatedItem = {
                    ...existingItemAdd,
                    amount: existingItemAdd.amount + 1,
                };

                updatedItems = [...state.items];
                updatedItems[existingItemAddIdx] = updatedItem;
            }

            console.log(existingItemAdd);

            return {
                // items: [...state.items, action.payload.item],
                items: updatedItems,
                totalQuantity: state.totalQuantity + 1,
                totalAmount: state.totalAmount + action.payload.item.price,
            };

        case REMOVE_ITEM:
            console.log("remove");

            const existingItemRemove = state.items.find((item) => item.id === action.payload.id);
            const existingItemRemoveIdx = state.items.findIndex((item) => item.id === action.payload.id);

            console.log(existingItemRemove);

            if (existingItemRemove.amount === 1) {
                console.log("ostatni");

                return {
                    items: state.items.filter((item) => item.id !== existingItemRemove.id),
                    totalQuality: state.totalQuantity - 1,
                    totalAmount: (state.totalAmount -= existingItemRemove.price),
                };
            } else {
                console.log("nie ostatni");

                const updatedRemovingItem = {
                    ...existingItemRemove,
                    amount: state.items[existingItemRemoveIdx].amount - 1,
                };

                let updatedItems = [...state.items];
                updatedItems[existingItemRemoveIdx] = updatedRemovingItem;

                return {
                    items: updatedItems,
                    totalQuantity: state.totalQuantity - 1,
                    totalAmount: (state.totalAmount -= updatedRemovingItem.price),
                };
            }

        case CLEAR_CART:
            return defaultState;

        default:
            return state;
    }
};
