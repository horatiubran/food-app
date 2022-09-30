import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import {store} from "./store";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const useFetchText = () => {
    const [text, setText] = useState('...')

    useEffect(() => {
        setTimeout(() => setText('Salut'), 3000)
    }, [])

    return text
}

const Page = () => {
    const text = useFetchText()

    return <>
        {text}
    </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<Page/>*/}
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
