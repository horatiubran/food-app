import {Input} from "../forms/Input/input";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";

export const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    const isAuth = useSelector(state => state.auth.isAuth)

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        console.log("enteredamount", enteredAmountNumber)

        if (enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 1) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber, enteredAmountNumber)
    }

    return <form onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label='Amount'
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        {isAuth && <button type="submit" className="btn btn-primary">Add to cart</button>}
        {!isAuth && <p>Please Log in to add to cart</p>}
        {!amountIsValid && <p>Please insert a valid amount. (1-5)</p>}
    </form>
}