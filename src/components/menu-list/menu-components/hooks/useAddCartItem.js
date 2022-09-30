import {useCallback, useContext} from "react";
import CartContext from "../../../../store/context/cart-context";

export const useAddCartItem = ({id, foodName, price}) => {
    const cartCtx = useContext(CartContext)
    const fixedPrice = price.toFixed(2)

    return useCallback((amount, selectedAmount) => {
        cartCtx.addItem({
            id,
            foodName,
            amount,
            price: fixedPrice
        }, selectedAmount)
    }, [cartCtx, fixedPrice, foodName, id])
}