import React from 'react';
import {useNavigate} from "react-router";
import BackBtn from "../shared/BackBtn";

const TruckLicence = () => {
    const navigate = useNavigate()
    return (
        <div>
            <BackBtn/>
            Truck Licence
        </div>
    );
};

export default TruckLicence;