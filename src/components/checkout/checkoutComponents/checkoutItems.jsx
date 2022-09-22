import {useContext} from "react";
import CartContext from "../../../store/context/cart-context";
import {ItemsList} from "./itemsList";


export const CheckoutItems = () => {
    const cartCtx = useContext(CartContext)
    const checkoutList = cartCtx.items.map(value =>
        <ItemsList key={value.id} id={value.id} name={value.foodName}
                       price={value.price} amount={value.amount}/>)

    return <div className="list-group">{checkoutList}</div>
}