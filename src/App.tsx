import {HashRouter, Route, Routes} from 'react-router-dom';
import React, {Fragment, useEffect, useState} from 'react';
import AppBar from './AppBar';
import LicenceType from './pages/LicenceSelector';
import DLQuestions from './components/DLQuestions';
import Login from './pages/Login';
import Candidates from './components/Candidates';
import UseFetch from "./Hook/useFetch";

function App() {


    const {data} = UseFetch("https://driving-licence-app.herokuapp.com/question/all")
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LicenceType/>}/>
                {data &&
                    <>
                        <Route path="/carLicence" element={<DLQuestions subject="car" data={data.questions}/>}/>
                        <Route path="/truckLicence"
                               element={<DLQuestions subject="truck" data={data.questions}/>}/>
                    </>

                }
                <Route path="/Login" element={<Login/>}/>
                <Route path="/candidates" element={<Candidates/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
