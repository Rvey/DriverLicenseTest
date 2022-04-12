import React, {useEffect, useState} from 'react';
import AppBar from './AppBar';
import LicenceTypeCard from "./components/LicenceTypeCard";
import svg from './logo.svg'

function App() {

    return (
        <div className="bg-gray-50 h-screen flex justify-center">

            <LicenceTypeCard licenceType="Car licence" imgSrc={svg} url="/carLicence"/>
            <LicenceTypeCard licenceType="Truck licence" imgSrc={svg} url="/truckLicence"/>
        </div>
    );
}

export default App;
