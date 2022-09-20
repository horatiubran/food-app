import {useContext} from "react";
import CartContext from "../../store/context/cart-context";
import {CartItem} from "./CartItem";
import {ShoppingCartModal} from "../modals/shoppingCart-modal";

export const ShoppingCart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = ` $${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item)
    }


    return <div><ul>
        {cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.foodName}
                amount={item.amount}
                price={item.price}
                onRemove={() => cartItemRemoveHandler(item.id)}
                onAdd={() => cartItemAddHandler(item)}
            />
        ))}
    </ul>
        Total Amount: {totalAmount}
    </div>


}