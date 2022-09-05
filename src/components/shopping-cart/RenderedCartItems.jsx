import {CartContext} from "../../context/cart-context";
import {cartReducer, defaultCartState} from "./cartReducer";
import {useReducer} from "react";

export const RenderedCartItems = (value) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    console.log(cartContext)
    return (
        <CartContext.Provider value={cartContext}>
            {value.children}
        </CartContext.Provider>
    );
};