import {Item} from "./Item";
import {useContext} from "react";
import CartContext from "../../../../store/context/cart-context";

export const Items = () => {
    const cartCtx = useContext(CartContext)

    const cartItemRemoveHandler = item => {
        cartCtx.removeItem(item.id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item)
    }


    return <div><ul>
        {cartCtx.items.length === 0 && <p>Shopping cart is empty. Please select food from the foodmenu</p>}
        {cartCtx.items.map((item) => (
            <Item
                key={item.id}
                name={item.foodName}
                amount={item.amount}
                price={item.price}
                onRemove={() => cartItemRemoveHandler(item)}
                onAdd={() => cartItemAddHandler(item)}
            />
        ))}
    </ul>
        Total Amount: {cartCtx.totalAmount}
    </div>


}