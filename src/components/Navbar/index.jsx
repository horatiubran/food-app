import {LoginModal} from "../modals/login-modal"
import {PrimaryModal} from "../modals/primary-modal"
import {ShoppingModal} from "../shopping-cart/index"
import {Link} from "react-router-dom";
import {ShoppingCartModal} from "../modals/shoppingCart-modal";
import {useDispatch, useSelector} from "react-redux";
import { authActions} from "../../store/auth";


export const Navbar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)

    const logoutHandler = (event) => {
        dispatch(authActions.logout())
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src="/mcdonald.jpg" alt="" width="60" height="48" className="d-inline-block align-text-top"/>
                <span className="navbar-navbar-brand mb-0 h1" href="../">My first Food App
        </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="../" className="nav-link active" aria-current="page">Home</Link>
                        <Link to="../foodmenu" className="nav-link">Food Menu</Link>
                        <Link to="../pricing" className="nav-link">Pricing</Link>
                        {!isAuth && <Link to="#" className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#LogInModal">Log In</Link>}
                        <PrimaryModal title="Please Log in" id={"LogInModal"}>
                            <LoginModal/>
                        </PrimaryModal>
                        {isAuth && <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#ShoppingCart">Shopping
                            Cart</a>}
                        <ShoppingCartModal title="Shopping Cart" id={"ShoppingCart"}>
                            <ShoppingModal/>
                        </ShoppingCartModal>
                        {isAuth &&  <button type="button" className="btn btn-danger" onClick={logoutHandler}>
                            Log Out
                        </button>}

                    </div>
                </div>
            </div>
        </nav>
    )
}