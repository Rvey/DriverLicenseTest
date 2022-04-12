import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DrivingLicence from "./components/DrivingLicence";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/carLicence" element={<DrivingLicence subject="carLicence" />}/>
                <Route path="/truckLicence" element={<DrivingLicence subject="truckLicence"/>}/>

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
