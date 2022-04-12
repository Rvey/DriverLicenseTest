import React from 'react';
import {useNavigate} from "react-router";
import BackBtn from "../shared/BackBtn";

const CarLicence = () => {
    const navigate = useNavigate()
    return (
        <div>
            <BackBtn/>
            car licence
        </div>
    );
};

export default CarLicence;