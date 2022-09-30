import {Modal} from "./Modal";
import {Items} from "./Items";
import {Store} from "../../../../store";

export const Cart = () => <>
    <a hidden={!Store.useIsAuth()} className="nav-link navbar__option rounded"
       href="src/components/Navbar/Options/ShoppingCart#"
       data-bs-toggle="modal"
       data-bs-target="#ShoppingCart">Shopping
        Cart
    </a>

    <Modal title="Shopping Cart" id={"ShoppingCart"}>
        <Items/>
    </Modal>
</>