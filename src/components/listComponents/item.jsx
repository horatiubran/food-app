import {useContext} from "react";
import CartContext from "../../store/context/cart-context";
import {MealItemForm} from "../menu-list/MealItemForm";
import {List} from "./index";

export const Item = ({id, foodName, description, price = 0}) => {
    const cartCtx = useContext(CartContext)
    const fixedPrice = price.toFixed(2)

    const addToCartHandler = (amount, selectedAmount) => {
        cartCtx.addItem({
            id,
            foodName,
            amount,
            price: fixedPrice
        }, selectedAmount)
    }


    return <List key={id}>
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{foodName}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
                <div className="col-12">
                    <MealItemForm onAddToCart={addToCartHandler} />
                </div>

            </div>
        </div>
    </List>
}