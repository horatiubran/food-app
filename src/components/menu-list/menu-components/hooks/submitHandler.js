export const submitHandler = (event, props, amountInputRef, setAmountIsValid) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 1) {

        setAmountIsValid(false);
        return;
    }

    props.onAddToCart(enteredAmountNumber, enteredAmountNumber)
}
