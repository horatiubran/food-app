import {useContext} from "react";
import cartContext from "../../../store/context/cart-context";

export const TotalAmount = () => {
    const cartCtx = useContext(cartContext)

    return <div className="card text-center">
        <div className="card-body">
            <h5 className="card-title">Total amount</h5>
            <p className="card-text">$ {cartCtx.totalAmount}</p>
        </div>
    </div>
}