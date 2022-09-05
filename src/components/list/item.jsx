import {useContext} from "react";
import {CartContext} from "../../context/cart-context";

export const Item = ({id, foodName, description, price, handleClick}) => {
    const {totalAmount, setTotalAmount} = useContext(CartContext)
    console.log("total", totalAmount)

    return <li className="list-group-item" key={id}>
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{foodName}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                <div className="col-12">
                    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                    <p>Number of portions</p>
                    <select className="select" defaultValue={totalAmount}
                            onChange={(num) => setTotalAmount(num.target.value)}>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </select>
                </div>
                <button type="submit" onClick={handleClick} className="btn btn-primary">Add to cart</button>

            </div>
        </div>
    </li>
}