import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Components} from "./components";
import {Navbar} from "./components/Navbar";
import {Home} from "./home";
import {Pricing} from "./components/pricing";
import {CartProvider} from "./store/context/CartProvider";


const App = () => {

    return (
        <CartProvider>
            <div className="App">
                <Navbar/>
                <h1>Welcome to my first food App!</h1>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/foodmenu" element={<Components/>}/>
                    <Route path="/pricing" element={<Pricing/>}/>
                </Routes>
            </div>
        </CartProvider>
    );
};

export default App;
