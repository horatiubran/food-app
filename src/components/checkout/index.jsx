import {CheckoutItems} from "./checkoutComponents/checkoutItems";
import {ConfirmOrder} from "./checkoutComponents/ConfirmOrder";
import {CheckoutForm} from "./checkoutComponents/CheckoutForm";
import {onSubmit} from "./checkoutComponents/onSubmit";

export const Checkout = () => {

    return <div>
        This is the Checkout Page
        <CheckoutItems />
        <ConfirmOrder />
        <CheckoutForm onSubmit={onSubmit}/>
    </div>
}