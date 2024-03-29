import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contract";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/*<App/>*/}
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contract" element={<Contact/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
