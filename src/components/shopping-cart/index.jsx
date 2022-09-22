import {useContext} from "react";
import CartContext from "../../store/context/cart-context";
import {CartItem} from "./CartItem";

export const ShoppingCart = (props) => {
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
            <CartItem
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