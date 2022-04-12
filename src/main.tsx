import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CarLicence from "./components/CarLicence";
import TruckLicence from "./components/TruckLicence";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/carLicence" element={<CarLicence/>}/>
                <Route path="/truckLicence" element={<TruckLicence/>}/>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
