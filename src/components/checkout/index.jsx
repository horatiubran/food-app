import {CheckoutItems} from "./checkoutComponents/checkoutItems";
import {TotalAmount} from "./checkoutComponents/TotalAmount";
import {CheckoutForm} from "./checkoutComponents/CheckoutForm";
import {onSubmit} from "./checkoutComponents/form-components/onSubmit";

export const Checkout = () => {

    return <div>
        This is the Checkout Page
        <CheckoutItems />
        <TotalAmount />
        <CheckoutForm onSubmit={onSubmit}/>
    </div>
}