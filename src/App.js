import "./App.css";
import {Routes, Route} from "react-router-dom";
import {Components} from "./components";
import {Navbar} from "./components/Navbar";
import {Home} from "./home";
import {Pricing} from "./components/pricing";


const App = () => {

    return (
        <div className="App">
                    <Navbar/>
                    <h1>Welcome to my first food App!</h1>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/foodmenu" element={<Components/>}/>
                        <Route path="/pricing" element={<Pricing />} />
                    </Routes>
        </div>
    );
};

export default App;
