import {CheckoutItems} from "./checkoutComponents/checkoutItems";
import {ConfirmOrder} from "./checkoutComponents/ConfirmOrder";
import {CheckoutForm} from "./checkoutComponents/CheckoutForm";

export const Checkout = () => {
    return <div>
        This is the Checkout Page
        <CheckoutItems />
        <ConfirmOrder />
        <CheckoutForm />
    </div>
}