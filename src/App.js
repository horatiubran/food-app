import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar"
import {Home} from "./components/home";
import {Pricing} from "./components/pricing";
import {CartProvider} from "./store/context/CartProvider";
import {Checkout} from "./components/checkout";
import {MenuList} from "./components/menu-list";


const App = () => {

    return (
        <CartProvider>
            <div className="App">
                <Navbar/>
                <h1>Welcome to my first food App!</h1>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/foodmenu" element={<MenuList/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </div>
        </CartProvider>
    );
};

export default App;
