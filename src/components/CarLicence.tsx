import React from 'react';
import {useNavigate} from "react-router";
import BackBtn from "../shared/BackBtn";
import AnswerCard from "./AnswerCard";

const CarLicence = () => {
    const navigate = useNavigate()
    return (
        <div>
            <BackBtn/>
            <AnswerCard/>
        </div>
    );
};

export default CarLicence;