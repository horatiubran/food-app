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

    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={() => cartItemRemoveHandler(item.id)}
                    onAdd={() => cartItemAddHandler(item)}
                />
            ))}
        </ul>
    );

    return (
        <ShoppingCartModal onClose={props.onClose}>
            {cartItems}
            <div>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div>
                <button onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button>Order</button>}
            </div>
        </ShoppingCartModal>
    );
}